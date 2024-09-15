'use client';
import { Box, Button, Divider, SxProps, TextField, Theme, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import { init, send } from '@emailjs/browser';
import { Wors } from '@/helper/worsList';
import { ValidationTextField } from '../convenience/ValidationTextField';
import { emailPattern, excludeHalfKanaSymbols, phonePattern } from '@/helper/format';


const key = process.env.NEXT_PUBLIC_EJS_INIT_KEY;
const serviceID = process.env.NEXT_PUBLIC_EJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID;
export const InquiryBlock = React.memo(() => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const onSubmit = useCallback(async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (key && serviceID && templateID && name && title && email && message) {
            init(key)
            const params = { name, title, email, message, phoneNumber };
            try {
                await send(serviceID, templateID, params).then(() =>
                    alert(Wors.Alert.thanksInquiry));
            } catch (error) {
                alert(Wors.Alert.failedInquiry);
            }
        }
    }, [isDisabled, name, title, email, message, phoneNumber]);

    useEffect(() => {
        setIsDisabled(!name || !email || !title || !message);
    }, [name, email, title, message]);

    return (<Box sx={styles.container}>
        <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>CONTACT</Typography>
            <MailOutlineIcon />
        </Box>
        <Box sx={styles.itemContainer}>
            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>お名前</Typography>
                <ValidationTextField
                    value={name}
                    setValue={setName}
                />
            </Box>
            <Divider variant='middle' />
            <Box sx={styles.itemBox}>
                <Typography width={'10%'} >電話番号</Typography>
                <ValidationTextField
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                    required={false}
                // pattern={phonePattern}
                />
            </Box>
            <Divider variant='middle' />

            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>Email</Typography>
                <ValidationTextField
                    value={email}
                    setValue={setEmail}
                    pattern={emailPattern}
                />
            </Box>
            <Divider variant='middle' />

            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>件名</Typography>
                <ValidationTextField
                    value={title}
                    setValue={setTitle}
                    pattern={excludeHalfKanaSymbols}
                />
            </Box>
            <Divider variant='middle' />
            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>内容</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }} multiline rows={10}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Box>
        </Box>
        <Button variant='contained' endIcon={<SendIcon />} sx={styles.button}
            onClick={onSubmit} disabled={isDisabled}>送信</Button>
    </Box>);
});

InquiryBlock.displayName = 'InquiryBlock';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        borderBottom: 'solid',
        borderWidth: '4px',
        width: '10%',
        marginY: 6
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        gap: 2
    },
    itemBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        margin: 2
    },
    required: {
        width: '10%',
        position: 'relative',
        '&:after': {
            content: '"必須"',
            backgroundColor: 'red',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            minWidth: '10px',
            padding: '3px 7px',
            margin: '0px 5px',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            borderRadius: '10px',
            display: 'inline-block',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '80%'
        }
    },
    button: {
        width: '20%',
        paddingY: 1,
        fontSize: '18px',
        marginTop: 2
    }
};

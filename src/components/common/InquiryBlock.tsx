'use client';
import { Box, Button, Divider, SxProps, Theme, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import { init, send } from '@emailjs/browser';
import { Wors } from '@/helper/worsList';
import { ValidationTextField } from '../convenience/ValidationTextField';
import { emailPattern, excludeHalfKanaSymbols, phonePattern } from '@/helper/format';
import { TitleBox } from '../convenience/TitleBox';

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
        <TitleBox
            title={'CONTACT'}
            Icon={MailOutlineIcon}
        />
        <Box sx={styles.itemContainer}>
            <TextFieldItem label={'お名前'} value={name} setValue={setName} />
            <TextFieldItem label={'電話番号'} value={phoneNumber} setValue={setPhoneNumber} required={false} pattern={phonePattern} />
            <TextFieldItem label={'Email'} value={email} setValue={setEmail} pattern={emailPattern} />
            <TextFieldItem label={'件名'} value={title} setValue={setTitle} pattern={excludeHalfKanaSymbols} />
            <TextFieldItem label={'内容'} value={message} setValue={setMessage} fullWidth multiline rows={10} />
            <Button variant='contained' endIcon={<SendIcon />} sx={styles.button}
                onClick={onSubmit} disabled={isDisabled}>送信</Button>
        </Box>
    </Box>);
});

const TextFieldItem = React.memo(({
    label, value, setValue,
    required = true, pattern,
    fullWidth, multiline, rows
}: {
    label: string; value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    required?: boolean; pattern?: string;
    fullWidth?: boolean; multiline?: boolean; rows?: number
}) => {
    return (<><Box sx={styles.itemBox}>
        <Typography sx={required ? styles.required : styles.phoneLabel}>
            {label}</Typography>
        <ValidationTextField
            value={value}
            setValue={setValue}
            required={required}
            pattern={pattern}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={rows}
        /></Box>
        <Divider variant='middle' />
    </>)
});
TextFieldItem.displayName = 'TextFieldItem';
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
        width: { xs: '90%', lg: '70%', xl: '50%' },
        gap: 2
    },
    itemBox: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: 1, md: '50px' },
        margin: { xs: 1, md: 2 }
    },
    required: {
        width: { xs: 'fit-content', md: '10%' },
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
            left: '100%'
        }
    },
    phoneLabel: {
        width: { xs: 'fit-content', md: '10%' }
    },
    button: {
        width: { xs: '80%', md: '20%' },
        paddingY: 1,
        fontSize: '18px',
        marginTop: 2,
        backgroundColor: '#2e8b57'
    }
};

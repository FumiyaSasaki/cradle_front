'use client';
import { Box, Button, Divider, SxProps, TextField, Theme, Typography } from '@mui/material';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';

export const InquiryBlock = React.memo(() => {
    return (<Box sx={styles.container}>
        <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>CONTACT</Typography>
            <MailOutlineIcon />
        </Box>
        <Box sx={styles.itemContainer}>
            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>お名前</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Divider variant='middle' />
            <Box sx={styles.itemBox}>
                <Typography width={'10%'} >電話番号</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Divider variant='middle' />

            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>email</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Divider variant='middle' />

            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>件名</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Divider variant='middle' />
            <Box sx={styles.itemBox}>
                <Typography sx={styles.required}>内容</Typography>
                <TextField required fullWidth
                    InputLabelProps={{ shrink: true }} multiline rows={10}
                />
            </Box>
        </Box>
        <Button variant='contained' endIcon={<SendIcon />} sx={styles.button} >送信</Button>
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
        marginTop:2
    }
};

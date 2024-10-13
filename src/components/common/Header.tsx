import { AppBar, SxProps, Theme, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import Link from 'next/link';

export const Header = React.memo(({ isBack }: { isBack?: boolean }) => {
    const linkStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
    return (
        <AppBar sx={styles.appBar}>
            <Toolbar sx={{ ...styles.toolbar, justifyContent: isBack ? 'space-around' : 'space-between' }}>
                <Link href={'/'} style={linkStyle}><img src={'../../logo.png'} width={'7%'} height={'7%'} />
                    <Typography sx={styles.title} ml={1}>クレイドル</Typography></Link>
                {isBack && <Typography sx={styles.title}>
                    <Link href={'/'} style={linkStyle}><ArrowBackIcon />Top</Link></Typography>}
            </Toolbar>
        </AppBar>
    );
});

Header.displayName = 'Header';

const styles: { [key: string]: SxProps<Theme> } = {
    appBar: {
        backgroundColor: 'white',
        height: '7%'
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: '22px',
        fontWeight: '500',
    }
};

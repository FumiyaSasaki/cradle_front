import { AppBar, IconButton, SxProps, Theme, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Link from 'next/link';

export const Header = React.memo(({ isBack }: { isBack?: boolean }) => {
    return (
        <AppBar sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Typography sx={styles.title}><Link href={'/'}>クレイドル</Link> </Typography>
                {/* <IconButton>{isBack ? <Link href={'/'}>HOME</Link> : <MenuIcon />}</IconButton> */}
            </Toolbar>
        </AppBar>
    );
});

Header.displayName = 'Header';

const styles: { [key: string]: SxProps<Theme> } = {
    appBar: {
        backgroundColor: 'white',
        height: '6%'
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: '22px',
        fontWeight: '500',
        paddingLeft: 8
    }
};

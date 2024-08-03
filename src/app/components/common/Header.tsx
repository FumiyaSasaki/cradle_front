import { AppBar, IconButton, SxProps, Theme, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

export const Header = React.memo(() => {
    return (
        <AppBar sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <Typography sx={styles.title}>クレイドル</Typography>
                <IconButton><MenuIcon /></IconButton>
            </Toolbar>
        </AppBar>
    );
});

Header.displayName = 'Header';

const styles: { [key: string]: SxProps<Theme> } = {
    appBar: {
        backgroundColor: 'white'
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: '22px',
        fontWeight: '500'
    }
};

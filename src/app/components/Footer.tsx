import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';

export const Footer = React.memo(() => {
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.text}>copyrights© CRADLE. All Rights Reserved.</Typography>
        </Box>
    );
});

Footer.displayName = 'Footer';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingY: 5
    },
    text: {
        color: 'white'
    }
};

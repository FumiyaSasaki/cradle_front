'use client'
import React from 'react';
import { Box, Divider, SxProps, Theme, Typography } from '@mui/material';
import { Header } from '@/components/common/Header';
import { BlogType } from '@/store/blog';

export const BlogPage = React.memo(({
    blog
}: {
    blog: BlogType
}) => {
    return <>
        <Header isBack />
        {blog && (<Box sx={styles.container}>
            <Box sx={styles.titleBox}>
                <Typography sx={styles.title}>{blog.title}</Typography>
            </Box>
            <Box sx={styles.itemContainer}>
                {blog.imageContents.map(item => (
                    <Box sx={styles.itemBox} key={item.title}>
                        <img alt='' src={item.url} width='100%' height='400px' style={{ objectFit: 'contain' }} />
                        <Typography sx={styles.itemTitle}>{item.title}</Typography>
                        <Typography sx={styles.itemContent}>{item.content}</Typography>
                    </Box>
                ))}
            </Box>
            <Divider flexItem />
        </Box>)}
    </>
});

BlogPage.displayName = 'BlogPage';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        marginY: 3,
        paddingTop: 8
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: { xs: '90%', lg: '50%' },
        boxShadow: '2px 2px 4px gray',
        borderTop: 'solid #2e8b57',
        padding: 1
    },
    itemContainer: {
        width: { xs: '90%', lg: '50%' },
        gap: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    itemBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    itemTitle: {
        borderLeft: 'solid',
        paddingLeft: 1,
        fontSize: '20px',
        borderColor: 'green'
    },
    itemContent: {
        fontSize: '18px'
    }
};
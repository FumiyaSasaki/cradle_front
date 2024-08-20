'use client'
import React, { useEffect, useState } from 'react';
import { Box, Divider, SxProps, Theme, Typography } from '@mui/material';
import { Header } from '@/components/common/Header';
import { InquiryBlock } from '@/components/common/InquiryBlock';
import { BlogType, useBlogStore } from '@/store/blog';
import { getBlogByUid } from '@/core/api';

export const BlogPage = React.memo(({
    uid
}: {
    uid: string
}) => {
    const [blog, setBlog] = useState<BlogType>(useBlogStore().blogState[uid]);

    useEffect(() => {
        if (!blog) {
            getBlogByUid(uid).then(item => setBlog(item));
        };
      }, []);

    return <>
        <Header isBack />
        {blog && (<Box sx={styles.container}>
            <Box sx={styles.titleBox}>
                <Typography sx={styles.title}>{blog.title}</Typography>
            </Box>
            <Box sx={styles.itemContainer}>
                {blog.imageContents.map(item => (
                    <Box sx={styles.itemBox} key={item.title}>
                        <img alt='' src={item.url} width='100%' height='400px' />
                        <Typography sx={styles.itemTitle}>{item.title}</Typography>
                        <Typography sx={styles.itemContent}>{item.content}</Typography>
                    </Box>
                ))}
            </Box>
            <Divider flexItem />
        </Box>)}
        <InquiryBlock />
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
        marginY: 3
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        boxShadow: '2px 2px 4px gray',
        borderTop: 'solid green',
        padding: 1
    },
    itemContainer: {
        width: '50%',
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
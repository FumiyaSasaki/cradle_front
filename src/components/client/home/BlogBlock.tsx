'use client';
import { Box, Divider, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BlogType } from '@/store/blog';
import { formatDate } from '@/helper/format';
import { DummyData } from '@/tool/dummyData';

export const BlogBlock = React.memo(({
    blogsData
}: {
    blogsData: BlogType[];
}) => {
    return (<Box sx={styles.container}>
        <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>BLOG</Typography>
            <MenuBookIcon />
        </Box>
        <Box sx={styles.itemContainer}>
            {blogsData.map((blog: BlogType) => (
                <Link href={`/`} key={blog.uid} >
                    <Box sx={styles.itemBox}>
                        <img alt='' src={DummyData.imageUrl} width='300px' height='200px' style={{ borderRadius: '4px' }} />
                        <Box sx={styles.explanationBox}>
                            <Box sx={styles.textBox}>
                                <Typography sx={styles.contentTitle}>{blog.title}</Typography>
                                <Typography sx={styles.contentText}>{blog.content}</Typography>
                            </Box>
                            <Typography sx={styles.contentDate}>{formatDate(blog.updatedAt)}</Typography>
                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{ marginTop: 2 }} />
                </Link>
            ))}
        </Box>
    </Box>);
});

BlogBlock.displayName = 'BlogBlock';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        paddingBottom: 10
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        borderBottom: 'solid',
        borderWidth: '4px',
        width: '8%',
        marginY: 6
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '80%',
        backgroundColor: 'white',
    },
    itemBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        margin: 2
    },
    explanationBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },
    contentTitle: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    contentText: {
        fontSize: '16px'
    },
    contentDate: {
        fontSize: '14px',
        backgroundColor: 'lightsteelblue',
        borderRadius: '4px',
        padding: '4px',
        width: '10%',
        textAlign: 'center'
    }
};

'use client';
import { Box, Button, Divider, SxProps, Theme, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BlogType, useBlogStore } from '@/store/blog';
import { formatDate } from '@/helper/format';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const BlogBlock = React.memo(({
    blogsData
}: {
    blogsData: BlogType[];
}) => {
    const setBlog = useCallback(useBlogStore((state) => state.setBlogState), []);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setBlog(blogsData);
    }, []);
    
    return (<Box sx={styles.container}>
        <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>BLOG</Typography>
            <MenuBookIcon />
        </Box>
        <Box sx={styles.itemContainer}>
            {blogsData.slice(0, count + 3).map((blog: BlogType) => (
                <Link href={`/blog/${blog.uid}`} key={blog.uid} >
                    <Box sx={styles.itemBox}>
                        <img alt='' src={blog.imageContents[0].url} width='300px' height='200px' style={{ borderRadius: '4px' }} />
                        <Box sx={styles.explanationBox}>
                            <Box sx={styles.textBox}>
                                <Typography sx={styles.contentTitle}>{blog.title}</Typography>
                                <Typography sx={styles.contentText}>{blog.content}</Typography>
                            </Box>
                            <Typography sx={styles.contentDate}>{formatDate(new Date(blog.updatedAt))}</Typography>
                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{ marginTop: 2 }} />
                </Link>
            ))}
        </Box>
        {blogsData.length > count + 3 &&
            <Button sx={styles.button} onClick={() => setCount(prev => prev + 3)}
                endIcon={<ExpandMoreIcon />}>もっと見る</Button>
        }
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
    },
    button: {
        marginTop: 2,
        borderBottom: 1,
        borderRadius: 0,
        color: 'gray',
        borderColor: 'gray'
    }
};

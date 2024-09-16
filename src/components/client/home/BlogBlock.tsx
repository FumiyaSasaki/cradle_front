'use client';
import { Box, Button, Divider, SxProps, Theme, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BlogType, useBlogStore } from '@/store/blog';
import { formatDate } from '@/helper/format';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TitleBox } from '@/components/convenience/TitleBox';
import { useWindowSize } from '@/hooks/useWindowSize';

export const BlogBlock = React.memo(({
    blogsData
}: {
    blogsData: BlogType[];
}) => {
    const setBlog = useCallback(useBlogStore((state) => state.setBlogState), []);
    const [count, setCount] = useState<number>(0);
    const [width, height] = useWindowSize();
    const isMobile: boolean = width <= 900;

    useEffect(() => {
        setBlog(blogsData);
    }, []);

    const imageStyle: React.CSSProperties = {
        borderRadius: '4px',
        width: isMobile ? '100%' : '20%',
        height: '180px',
        objectFit: isMobile ? 'cover' : 'contain'
    }

    return (<Box sx={styles.container}>
        <TitleBox
            title={'BLOG'}
            Icon={MenuBookIcon}
        />
        <Box sx={styles.itemContainer}>
            {blogsData.slice(0, count + 3).map((blog: BlogType) => (
                <Link href={`/blog/${blog.uid}`} key={blog.uid} >
                    <Box sx={styles.itemBox}>
                        <img alt='' src={blog.imageContents[0].url} style={imageStyle} />
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
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '80%',
        backgroundColor: 'white',
    },
    itemBox: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 1, md: 5 },
        margin: 2
    },
    explanationBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        gap: 1
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
        fontSize: '16px',
        overflowWrap: 'anywhere',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ' -webkit-line-clamp': { xs: 3, md: 4 }
    },
    contentDate: {
        fontSize: '14px',
        backgroundColor: 'lightsteelblue',
        borderRadius: '4px',
        padding: '4px',
        width: 'fit-content',
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

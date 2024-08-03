'use client';
import { Box, Divider, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { NewsType } from '../store/news';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const imgUrl = 'http://fs561381.xsrv.jp/img/test.png';

export const NewsList = React.memo(({
    newsData
}: {
    newsData: NewsType[];
}) => {
    const formatDate = (date: Date) => date.toLocaleDateString('ja', { year: 'numeric', month: 'short', day: 'numeric' });
    return (<Box sx={styles.container}>
        <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>BLOG</Typography>
            <MenuBookIcon />
        </Box>
        <Box sx={styles.itemContainer}>
            {newsData.map((item: NewsType) => (
                <Link href={`/`} key={item.id} >
                    <Box sx={styles.itemBox}>
                        <img alt='' src={imgUrl} width='300px' height='200px' style={{ borderRadius: '4px' }} />
                        <Box sx={styles.explanationBox}>
                            <Box sx={styles.textBox}>
                                <Typography sx={styles.contentTitle}>{item.title}</Typography>
                                <Typography sx={styles.contentText}>{item.content}</Typography>
                            </Box>
                            <Typography sx={styles.contentDate}>{formatDate(item.updatedAt)}</Typography>
                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{ marginTop: 2 }} />
                </Link>
            ))}
        </Box>
    </Box>);
});

NewsList.displayName = 'NewsList';

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

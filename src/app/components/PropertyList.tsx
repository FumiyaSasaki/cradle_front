'use client';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Property, usePropertyStore } from '../store/property';
const imgUrl = 'http://fs561381.xsrv.jp/img/test.png';

export const PropertyList = React.memo(({
    propertiesData
}: {
    propertiesData: Property[];
}) => {
    const setProperty = useCallback(usePropertyStore((state) => state.setProperties), []);

    useEffect(() => {
        setProperty(propertiesData);
    }, []);

    return (<Box sx={styles.container}>
        <Typography sx={styles.title}>物件一覧</Typography>
        <Box sx={styles.itemContainer}>
            {propertiesData.map((item: Property) => (
                <Box sx={styles.itemBox} key={item.id}>
                    <Link href={`/detail/${item.uid}`}>
                        <Box sx={styles.icon} bgcolor={item.isVacancy ? 'yellow' : 'white'}>
                            <span>{item.isVacancy ? '募集中' : '満室'}</span>
                        </Box>
                        <img alt='' src={imgUrl} width='100%' height='auto' />
                        <Box sx={styles.explanationBox}>
                            <Box sx={styles.textBox}>
                                <Typography sx={styles.name}>{item.name}</Typography>
                                <Typography>{item.prefecture} / {item.city}</Typography>
                            </Box>
                            <ArrowCircleRightIcon sx={styles.arrowIcon} />
                        </Box>
                    </Link>
                </Box>
            ))}
        </Box>
    </Box>);
});

PropertyList.displayName = 'PropertyList';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '22px',
        color: 'white',
        paddingY: 2,
        backgroundColor: 'gray',
        width: '100%',
        textAlign: 'center',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        width: '80%',
        gap: 4
    },
    itemBox: {
        boxShadow: '2px 2px 4px gray',
        width: '30%',
        position: 'relative'
    },
    icon: {
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        lineHeight: '70px',
        textAlign: 'center',
        boxShadow: '0 0 8px gray',
        position: 'absolute',
        right: '-6%',
        top: '-6%',
    },
    explanationBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingX: 2,
        paddingY: 1
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    arrowIcon: {
        alignSelf: 'flex-end',
        fontSize: '28px'
    }
};

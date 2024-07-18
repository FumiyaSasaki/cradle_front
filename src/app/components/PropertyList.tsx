import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { usePropertyStore } from "../store/property";
const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiCLzHgA2Tq6y69FOlY12A4bzdiO0rMq02g&s';
const data2 = {
    id: 1,
    rent: 5,
    prefecture: '東京',
    municipalities: '世田谷区',
    houseNumber: 2,
    building: '藤和用賀コープ',
    distanceMinutes: 10,
    floorPlan: '2LDK',
    age: 20,
    direction: '南',
    occupancyArea: 50,
    deposit: 5,
    keyMoney: 5,
    isVacancy: true,
};
const data = [
    { id: 1, title: 'クレイドル山梨1', address: '山梨・甲府', isVacancy: true },
    { id: 2, title: 'クレイドル山梨2', address: '山梨・甲府', isVacancy: true },
    { id: 3, title: 'クレイドル山梨3', address: '山梨・甲府', isVacancy: false },
    { id: 4, title: 'クレイドル山梨4', address: '山梨・甲府', isVacancy: true },
    { id: 5, title: 'クレイドル山梨5', address: '山梨・甲府', isVacancy: false },
];

export const PropertyList = React.memo(() => {
    const setProperty = useCallback(usePropertyStore((state) => state.setProperty), []);

    useEffect(() => {
        setProperty(data2);
    }, []);

    return (<Box sx={styles.container}>
        <Typography sx={styles.title}>一覧</Typography>
        <Typography sx={styles.title}>{usePropertyStore().id}</Typography>
        <Box sx={styles.itemContainer}>
            {data.map((item) => (
                <Box sx={styles.itemBox} key={item.title}>
                    <Link href={`/detail?=${item.id}`}>
                        <Box sx={styles.icon} bgcolor={item.isVacancy ? 'yellow' : 'white'}>
                            <span>{item.isVacancy ? '募集中' : '満室'}</span>
                        </Box>
                        <img alt='' src={imgUrl} width='100%' height='auto' />
                        <Box sx={styles.explanationBox}>
                            <Box sx={styles.textBox}>
                                <Typography sx={styles.name}>{item.title}</Typography>
                                <Typography>{item.address}</Typography>
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

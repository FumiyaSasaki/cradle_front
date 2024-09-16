'use client';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { BuildingType, useBuildingStore } from '@/store/building';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { TitleBox } from '@/components/convenience/TitleBox';

export const BuildingBlock = React.memo(({
    buildingData
}: {
    buildingData: BuildingType[];
}) => {
    const setBuilding = useCallback(useBuildingStore((state) => state.setBuildingState), []);

    useEffect(() => {
        setBuilding(buildingData);
    }, []);

    return (<Box sx={styles.container}>
        <TitleBox
            title={'物件一覧'}
            Icon={ApartmentIcon}
        />
        <Box sx={styles.itemContainer}>
            {buildingData.map((item: BuildingType) => (
                <Box sx={styles.itemBox} key={item.uid}>
                    <Link href={`/detail/${item.uid}`}>
                        <Box sx={styles.icon} bgcolor={item.isVacancy ? 'yellow' : 'white'}>
                            <span>{item.isVacancy ? '募集中' : '満室'}</span>
                        </Box>
                        <img alt='' src={item.imageContents[0].url} width='100%' height='auto'
                            style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} />
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

BuildingBlock.displayName = 'BuildingBlock';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: { xs: 'center', md: 'flex-start' },
        flexWrap: 'wrap',
        marginTop: 8,
        width: '80%',
        gap: 7
    },
    itemBox: {
        boxShadow: '2px 2px 4px gray',
        width: { xs: '97%', md: '28%' },
        position: 'relative',
        marginBottom: 3,
        borderRadius: '6px',
        ':hover': {
            boxShadow: '0px 0px 15px 2px rgba(0, 0, 0, 0.2)',
            transform: { xs: `scale(${0.9})`, md: `scale(${1.1})` },
            transition: '.3s'
        },
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

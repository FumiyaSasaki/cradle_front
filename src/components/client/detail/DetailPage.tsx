'use client'
import React from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { BuildingType } from '@/store/building';
import { ImageBlock } from './ImageBlock';
import { MapBlock } from './MapBlock';
import { DetailItemBlock } from './DetailItemBlock';
import { Header } from '@/components/common/Header';

export const DetailPage = React.memo(({
  building
}: {
  building: BuildingType
}) => {
  return <>
    <Header isBack />
    {building && (<Box sx={styles.container}>
      <Box sx={styles.titleBox}>
        <Typography sx={styles.title}>{building.name}</Typography>
        <Typography sx={styles.title}>家賃・{building.rent}万円</Typography>
      </Box>
      <ImageBlock imageContent={building.imageContents} />
      <DetailItemBlock building={building} />
      <MapBlock name={building.name}
        latitude={building.latitude}
        longitude={building.longitude} />
    </Box>)}
  </>
});

DetailPage.displayName = 'DetailPage';

const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    paddingTop: 8,
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
  title: {
    fontSize: '22px',
    fontWeight: 'bold'
  }
};
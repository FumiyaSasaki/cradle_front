'use client'
import React, { useEffect, useState } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { PropertyType, usePropertyStore } from '@/store/property';
import { getPropertyByUid } from '@/core/api';
import { ImageBlock } from './ImageBlock';
import { MapBlock } from './MapBlock';
import { DetailItemBlock } from './DetailItemBlock';
import { Header } from '@/components/common/Header';
import { InquiryBlock } from '@/components/common/InquiryBlock';

export const DetailPage = React.memo(({
  uid
}: {
  uid: string
}) => {
  const [property, setProperty] = useState<PropertyType>(usePropertyStore().propertyState[uid]);

  useEffect(() => {
    if (!property) {
      getPropertyByUid(uid).then(item => setProperty(item));
    };
  }, []);

  return <>
    <Header isBack />
    {property && (<Box sx={styles.container}>
      <Box sx={styles.titleBox}>
        <Typography sx={styles.title}>{property.name}</Typography>
        <Typography sx={styles.title}>家賃・{property.rent}万円</Typography>
      </Box>
      <ImageBlock />
      <DetailItemBlock property={property} />
      <MapBlock name={property.name}
        latitude={property.latitude ? property.latitude : 34.70250197358303}
        longitude={property.longitude ? property.longitude : 135.49595618224777} />
    </Box>)}
    <InquiryBlock />
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
  title: {
    fontSize: '22px',
    fontWeight: 'bold'
  }
};
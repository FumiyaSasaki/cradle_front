'use client'
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { PropertyType, usePropertyStore } from '@/store/property';
import { getPropertyByUid } from '@/core/api';

export const DetailPage = React.memo(({ uid }: { uid: string }) => {
  const [property, setProperty] = useState<PropertyType>(usePropertyStore().propertyState[uid]);

  useEffect(() => {
    if (!property) {
      getPropertyByUid(uid).then(item => setProperty(item));
    };
  }, []);

  return <Box>
    {property && (<Box>
      <Typography>{property.age}</Typography>
      <Typography>{property.prefecture}/{property.city}/{property.town}/{property.address}/{property.building}</Typography>
      <Typography>{property.deposit}万円</Typography>
      <Typography>{property.direction}向き</Typography>
      <Typography>駅から{property.distanceMinutes}分</Typography>
      <Typography>{property.floorPlan}</Typography>
      <Typography>礼金：{property.keyMoney}万円</Typography>
      <Typography>{property.name}</Typography>
      <Typography>{property.occupancyArea}㎠</Typography>
      <Typography>家賃：{property.rent}万円</Typography>
    </Box>
    )}
    <Link href={'/'}>HOME</Link>
  </Box>
});

DetailPage.displayName = 'DetailPage';
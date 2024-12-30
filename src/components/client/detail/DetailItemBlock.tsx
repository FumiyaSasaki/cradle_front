import React, { useState } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { BuildingType } from '@/store/building';
import { useWindowSize } from '@/hooks/useWindowSize';
import { ParkingType } from '@/store/parking';

export const DetailItemBlock = React.memo(({
  property
}: {
  property: BuildingType | ParkingType
}) => {
  const isBuilding = 'direction' in property;
  const [address] = useState<string>(property.prefecture + property.city +
    property.town + property.address + (isBuilding ? property.building : ''));

  const formatYear = (age: Date) => {
    const ageOfBuilding: number = new Date(age).getUTCFullYear();
    const now: number = new Date().getUTCFullYear();
    return `${ageOfBuilding}年（築年数 : ${now - ageOfBuilding}年）`;
  };

  return (
    <Box sx={styles.container}>
      <ItemBox label='所在地' content={address} fullwidth />
      <UnitItemBox itemBoxes={[{ label: '家賃', content: property.rent + '万円' },
      { label: '築年数', content: formatYear(property.age) }]} />
      <UnitItemBox itemBoxes={[{ label: '礼金', content: property.keyMoney + '万円' },
      { label: '敷金', content: property.deposit + '万円' }]} />
      {isBuilding && <>
        <UnitItemBox itemBoxes={[{ label: '向き', content: property.direction + '向き' },
        { label: '駅から', content: property.distanceMinutes + '分' }]} />
        <UnitItemBox itemBoxes={[{ label: '間取り', content: property.floorPlan },
        { label: '専有面積', content: property.occupancyArea + '㎠' }]} />
      </>}
      {property.remarks &&
        <ItemBox label='備考' content={property.remarks} fullwidth />
      }
    </Box>
  )
});

DetailItemBlock.displayName = 'DetailItemBlock';

const ItemBox = React.memo(({
  label, content, fullwidth
}: {
  label: string, content: string, fullwidth?: boolean
}) => <Box width={fullwidth ? '100%' : '50%'} sx={styles.itemBox}>
    <Typography sx={styles.label}>{label}</Typography>
    <Typography sx={styles.content}>{content}</Typography>
  </Box>);
ItemBox.displayName = 'ItemBox';

const UnitItemBox = React.memo(({ itemBoxes }: { itemBoxes: { label: string, content: string }[] }) => {
  const [width, height] = useWindowSize();
  const isXs: boolean = width <= 600;
  return <>{isXs ? <>{itemBoxes.map(itemBox =>
    <ItemBox key={itemBox.label} label={itemBox.label} content={itemBox.content} fullwidth />)}</> :
    <Box sx={styles.unitItemBox}>
      {itemBoxes.map(itemBox => <ItemBox key={itemBox.label} label={itemBox.label} content={itemBox.content} />)}
    </Box>}
  </>
});
UnitItemBox.displayName = 'UnitItemBox';

const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '90%', lg: '50%' },
    gap: 2
  },
  itemBox: {
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid gray',
    gap: 2
  },
  unitItemBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    backgroundColor: '#2e8b57',
    paddingY: 2,
    width: '20%',
    textAlign: 'center'
  },
  content: {
    padding: 2,
  }
};
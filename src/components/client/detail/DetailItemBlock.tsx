import React, { useState } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { BuildingType } from '@/store/building';
import { useWindowSize } from '@/hooks/useWindowSize';

export const DetailItemBlock = React.memo(({
  building
}: {
  building: BuildingType
}) => {
  const [address] = useState<string>(building.prefecture + building.city +
    building.town + building.address + building.building);

  return (
    <Box sx={styles.container}>
      <ItemBox label='所在地' content={address} fullwidth />
      <UnitItemBox itemBoxs={[{ label: '家賃', content: building.rent + '万円' },
      { label: '築年数', content: building.age + '年' }]} />
      <UnitItemBox itemBoxs={[{ label: '礼金', content: building.keyMoney + '万円' },
      { label: '敷金', content: building.deposit + '万円' }]} />
      <UnitItemBox itemBoxs={[{ label: '向き', content: building.direction + '向き' },
      { label: '駅から', content: building.distanceMinutes + '分' }]} />
      <UnitItemBox itemBoxs={[{ label: '間取り', content: building.floorPlan },
      { label: '専有面積', content: building.occupancyArea + '㎠' }]} />
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

const UnitItemBox = React.memo(({ itemBoxs }: { itemBoxs: { label: string, content: string }[] }) => {
  const [width, height] = useWindowSize();
  const isXs: boolean = width <= 600;
  return <>{isXs ? <>{itemBoxs.map(itemBox =>
    <ItemBox key={itemBox.label} label={itemBox.label} content={itemBox.content} fullwidth />)}</> :
    <Box sx={styles.unitItemBox}>
      {itemBoxs.map(itemBox => <ItemBox key={itemBox.label} label={itemBox.label} content={itemBox.content} />)}
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
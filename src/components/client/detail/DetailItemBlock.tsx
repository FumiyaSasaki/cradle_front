import React from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { BuildingType } from '@/store/building';

export const DetailItemBlock = React.memo(({
  building
}: {
  building: BuildingType
}) => {

  const ItemBox = React.memo(({
    label, content, fullwidth
  }: {
    label: string, content: string, fullwidth?: boolean
  }) => <Box width={fullwidth ? '100%' : '50%'} sx={styles.itemBox}>
      <Typography sx={styles.label}>{label}</Typography>
      <Typography sx={styles.content}>{content}</Typography>
    </Box>);
  ItemBox.displayName = 'ItemBox'

  return (
    <Box sx={styles.container}>
      <ItemBox label='所在地' content={building.prefecture + building.city + building.town + building.address + building.building} fullwidth />
      <Box sx={styles.unitItemBox}>
        <ItemBox label='家賃' content={building.rent + '万円'} />
        <ItemBox label='築年数' content={building.age + '年'} />
      </Box>
      <Box sx={styles.unitItemBox}>
        <ItemBox label='礼金' content={building.keyMoney + '万円'} />
        <ItemBox label='敷金' content={building.deposit + '万円'} />
      </Box>
      <Box sx={styles.unitItemBox}>
        <ItemBox label='向き' content={building.direction + '向き'} />
        <ItemBox label='駅から' content={building.distanceMinutes + '分'} />
      </Box>
      <Box sx={styles.unitItemBox}>
        <ItemBox label='間取り' content={building.floorPlan} />
        <ItemBox label='専有面積' content={building.occupancyArea + '㎠'} />
      </Box>
    </Box>
  )
});

DetailItemBlock.displayName = 'DetailItemBlock';

const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
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
    backgroundColor: 'gray',
    paddingY: 2,
    width: '20%',
    textAlign: 'center'
  },
  content: {
    padding: 2,
  }
};
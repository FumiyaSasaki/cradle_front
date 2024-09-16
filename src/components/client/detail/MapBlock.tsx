import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import dynamic from 'next/dynamic';

export const MapBlock = React.memo(({
  name, latitude, longitude
}: {
  name: string, latitude: number, longitude: number
}) => {
  const Map = React.useMemo(() =>
    dynamic(() => import('../../common/MapDisplay'), {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    }), []);

  return (<Box sx={styles.container}>
    <Map name={name} latitude={latitude} longitude={longitude} />
  </Box>)
});

MapBlock.displayName = 'MapBlock';

const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    width: { xs: '90%', lg: '50%' },
    border: '2px solid gray',
    padding: 1
  }
};
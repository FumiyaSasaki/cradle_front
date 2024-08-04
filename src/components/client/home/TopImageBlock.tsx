'use client';
import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const TopImageBlock = React.memo(() => {
    const topImages = ['/home/topImageDummy.png'];
    return (
        <Swiper slidesPerView={1}
            loop={true}
            autoplay={true}
            className='mySwiper' style={{ width: '100%' }}>
            {topImages.map(image => (
                <SwiperSlide key={image}>
                    <Box sx={styles.swiperItem}>
                        <img alt='' src={image} width='100%' height='500px' />
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
});

TopImageBlock.displayName = 'TopImageBlock';

const styles: { [key: string]: SxProps<Theme> } = {

};
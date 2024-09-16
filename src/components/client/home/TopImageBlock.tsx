'use client';
import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const TopImageBlock = React.memo(() => {
    const topImages = ['/home/yamanashiCradle.jpg', '/home/ibarakiCopo.jpg'];
    return (
        <Box sx={styles.container}>
            <Swiper slidesPerView={1}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                speed={2000}
                className='mySwiper'>
                {topImages.map(image => (
                    <SwiperSlide key={image}>
                        <Box sx={styles.swiperSlideBox}>
                            <img alt='' src={image} width={'100%'} height={'100%'}
                                style={{ objectFit: 'cover', display: 'flex' }} />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box>
    );
});

TopImageBlock.displayName = 'TopImageBlock';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        backgroundColor: 'whitesmoke',
        paddingBottom: 10
    },
    swiperSlideBox: {
        height: { xs: '100vh', md: '80vh' }
    }
};
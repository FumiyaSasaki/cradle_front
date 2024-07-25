'use client';
import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiCLzHgA2Tq6y69FOlY12A4bzdiO0rMq02g&s';

export const TopImage = React.memo(() => {
    const data = [
        { title: 'aaaa1' },
        { title: 'aaaa2' },
        { title: 'aaaa3' },
        { title: 'aaaa4' },
    ];
    const onClickGoToTopick = () => console.log('aaaa');
    return (
        <Swiper slidesPerView={1}
            loop={true}
            autoplay={true}
            className='mySwiper' style={{ width: '100%' }}>
            {data.map((item) => (
                <SwiperSlide onClick={onClickGoToTopick} key={item.title}>
                    <Box sx={styles.swiperItem}>
                        <img alt='' src={imgUrl} width='100%' height='500px' />
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
});

TopImage.displayName = 'TopImage';

const styles: { [key: string]: SxProps<Theme> } = {

};

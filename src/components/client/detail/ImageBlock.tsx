import React, { useCallback, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import '../../../styles/imageBlock.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { ImageContentType } from '@/types/Common.type';

export const ImageBlock = React.memo(({
    imageContent
}: {
    imageContent: ImageContentType[]
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [title, setTitle] = useState<string>('');
    const [numberSheet, setNumberSheet] = useState<number>(1);

    const setMiddleBoxText = useCallback((title: string, index: number) => {
        setTitle(title);
        setNumberSheet(index + 1);
    }, []);
    return (
        <Box sx={styles.container}>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper_top'
            >
                {imageContent.map((image, index) => (
                    <SwiperSlide key={image.url} onClick={() => setMiddleBoxText(image.title, index)}>
                        <img src={image.url} className='top_image' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box sx={styles.middleBox}>
                <Typography sx={styles.middleBoxText}>{title}</Typography>
                <Typography sx={styles.middleBoxText}>{numberSheet}/{imageContent.length}</Typography>
            </Box>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper_under'
            >
                {imageContent.map((image, index) => (
                    <SwiperSlide key={image.url} onClick={() => setMiddleBoxText(image.title, index)} className='swipers_slide'>
                        <img src={image.url} className='under_image' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
});

ImageBlock.displayName = 'ImageBlock';

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        width: '50%',
    },
    middleBox: {
        backgroundColor: 'gray',
        padding: 1.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    middleBoxText: {
        color: 'white'
    }
};
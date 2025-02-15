import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Swiper } from 'swiper';

interface CustomEventDetail {
    activeIndex: number;
}

const MyComponent = () => {
    const handleSlideChange = (e: CustomEvent<CustomEventDetail>) => {
        const activeIndex = e.detail.activeIndex;
        console.log(activeIndex);
    };

    return (
        <ReactSwiper onSlideChange={(swiper) => {
            const event = new CustomEvent<CustomEventDetail>('slideChange', { detail: { activeIndex: swiper.activeIndex } });
            handleSlideChange(event);
        }}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </ReactSwiper>
    );
};

export default MyComponent;

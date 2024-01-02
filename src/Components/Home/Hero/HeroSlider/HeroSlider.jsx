// eslint-disable-next-line no-unused-vars
import React from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import useDataFetcher from '../../../../hook/useDataFetcher';
import SliderCard from './../SliderCard';


const HeroSlider = () => {
    const { data: gamesData, loading, error } = useDataFetcher("http://localhost:5000/games");

    if (loading) {
        return <div className="skeleton w-[94%] h-[600px] mb-30 mt-38 mx-auto"></div>;
    }

    if (error) {
        return <div className="skeleton w-[94%] h-[600px] mb-30 mt-38 mx-auto"></div>;
    }

    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                className="mySwiper"
                spaceBetween={20}
                slidesPerView={1}
            >
                {
                    gamesData.map((item) => <SwiperSlide key={item.id}><SliderCard item={item} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default HeroSlider;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from './../SliderCard';


const HeroSlider = () => {
    const swiperRef = useRef();
    const [gamesData, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/games");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                // navigation={true}
                // style={{ marginLeft: '40px', marginRight: '40px', position: 'unset' }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
            <div className='customize__navigation absolute bottom-7 right-3 text-3xl font-light text-[#2e2e2e] z-20'>
                <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
            </div>
        </div>
    );
};

export default HeroSlider;
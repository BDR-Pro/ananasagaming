// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { FaAngleDoubleRight, FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';

import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
const RentGame = () => {
    const swiperRef = useRef();


    // console.log(tvShows);

    return (
        <div className='relative bg-primary/80 bg-gradient-to-t from-primary from-10% to-transparent to-90%'>
            <div className="title flex items-center gap-1 align-middle">
                <h1 className='my-4 text-2xl inline-block rounded p-2 text-slate-200 font-serif'>Game For Rent</h1>
                <span className='text-[#e6e101] inline-block text-2xl mt-[5px]'><FaAngleDoubleRight /></span>
            </div>
            <Swiper
                modules={[Navigation]}
                // navigation={true}
                // style={{ marginLeft: '40px', marginRight: '40px', position: 'unset' }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="mySwiper"
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1000: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>item 1</SwiperSlide>
            </Swiper>
            <div className='customize__navigation absolute top-7 right-3 text-3xl font-light text-[#e6e101]'>
                <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
                <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
            </div>
        </div>

    );
};

export default RentGame;
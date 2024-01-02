// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const SliderCard = ({ item }) => {
    const { rating, image, name, description } = item || "";
    return (
        <div className="relative h-fit bg-gradient-to-r from-primary-500 to-primary-800">
            <figure><img src={image} alt="car!" className='w-full' /></figure>
            <div className='absolute top-[70%] left-[5%] w-[240px] translate-y-[-50%] md:top-[50%] md:left-[5%] md:translate-y-[-50%] md:w-[400px] px-5 py-4 shadow-2xl rounded-xl glass'>
                <h1 className='text-[14px] md:text-xl font-semibold font-serif'>{name}</h1>
                <p className='hidden md:block text-sm font-serif'>{description}</p>
                <div className="flex justify-between items-center">
                    <span>{rating}</span>
                    <button className='bg-gradient-to-r from-blue-950  inline-block px-6 py-1 md:py-3 rounded-2xl font-semibold text-white'>PLAY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
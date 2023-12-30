// eslint-disable-next-line no-unused-vars
import React from 'react';

const SliderCard = ({ item }) => {
    const { rating, image, price, name, description } = item;
    return (
        <div className="relative h-screen">
            <figure><img src={image} alt="car!" className='w-full' /></figure>
            <div className='absolute top-[50%] left-[5%] translate-y-[-50%] w-[400px] px-5 py-4 shadow-2xl rounded-xl glass'>
                <h1 className='text-xl font-semibold font-serif'>{name}</h1>
                <p className='text-sm font-serif'>{description}</p>
                <div className="flex justify-between items-center">
                    <span>{rating}</span>
                    <button className='bg-yellow-600/65 text-slate-800 border-2 border-slate-300 rounded-xl px-5 py-1 text-sm font-bold shadow-xl font-serif'>PLAY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
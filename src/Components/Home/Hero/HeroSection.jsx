// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSlider from './HeroSlider/HeroSlider';

const HeroSection = () => {
    return (
        <div className='bg-primary/80 bg-gradient-to-b from-primary from-10% to-transparent to-90%'>
            <HeroSlider />
        </div>
    );
};

export default HeroSection;
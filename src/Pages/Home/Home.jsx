// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../../Components/Home/Hero/HeroSection';
import RecentPlay from '../../Components/Home/RecentPlay/RecentPlay';
import TrendingGame from '../../Components/Home/TrendingGame/TrendingGame';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <RecentPlay />
            <TrendingGame />
        </div>
    )
};

export default Home;
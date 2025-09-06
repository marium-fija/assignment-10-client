import React from 'react';
import Banner from './Banner';
import ActiveGardeners from './ActiveGardeners';
import TrendingTips from './TrendingTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners></ActiveGardeners>
            <TrendingTips></TrendingTips>
        </div>
    );
};

export default Home;



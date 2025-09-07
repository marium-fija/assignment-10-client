import React from 'react';
import Banner from './Banner';
import ActiveGardeners from './ActiveGardeners';
import TrendingTips from './TrendingTips';
import CounterSection from './CounterSection';
import DonateSection from './DonateSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-11/12 mx-auto'>
                <ActiveGardeners></ActiveGardeners>
                <TrendingTips></TrendingTips>
                <CounterSection></CounterSection>
                <DonateSection></DonateSection>
            </div>

        </div>
    );
};

export default Home;



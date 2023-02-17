import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Features from './Features/Features';
import Teammembers from './Teammembers/Teammembers'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Features />
            <Teammembers />
        </div>
    );
};

export default Home;

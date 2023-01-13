import React from 'react';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';
import Resources from './Resources';
import Teammembers from './Teammembers/Teammembers';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <Resources/>
            <Teammembers />
        </div>
    );
};

export default Home;

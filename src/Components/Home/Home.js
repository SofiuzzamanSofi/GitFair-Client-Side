import React from 'react';
import Categories from './Categories/Categories';
import Details from './FeatureDetails/Details';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories></Categories>
            <Details></Details>
        </div>
    );
};

export default Home;
import React from 'react';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';
import Resources from './Resources';

const Home = () => {
    return (
        <div>
            <Hero />          
            <Categories></Categories>
            <Resources />
        </div>
    );
};

export default Home;

import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Features from './Features/Features';
import Resources from './Resources/Resources';
import TeamMembers from './TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Features/>
            <Resources />
            <TeamMembers />
        </div>
    );
};

export default Home;

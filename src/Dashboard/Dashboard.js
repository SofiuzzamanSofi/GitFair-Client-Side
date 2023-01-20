import React from 'react';
import Footer from '../Components/Share/Footer/Footer';
import Header from '../Components/Share/Header/Header';
import DMain from './DMain';

const Dashboard = () => {
    return (
        <div className='bg-black'>
            <Header />
            <DMain />
            <Footer />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Partners from '../Partners/Partners';
import Properties from '../Properties/Properties';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Properties />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;
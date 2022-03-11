import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className=''>
            <Navbar />
            <section className='container mx-auto pt-24'>
                <Sidebar />
            </section>
            <Footer />
        </div>
    );
};

export default Dashboard;
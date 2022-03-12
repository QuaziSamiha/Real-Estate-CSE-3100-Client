import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className=''>
            <Navbar />
            <section className='min-h-screen container pt-32'>
                <Sidebar />
            </section>
            <Footer />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>this is home</h1>

            <h1 className="bg-sky-500 text-3xl font-bold underline">
                Hello world!
            </h1>

        </div>
    );
};

export default Home;
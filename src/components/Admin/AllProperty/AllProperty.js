import React, { useState, useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DeleteProperty from '../DeleteProperty/DeleteProperty';

const AllProperty = () => {

    const [allProperties, setAllProperties] = useState([]);

    // const uri = http://localhost:3144/allProperties;
    useEffect(() => {
        fetch('http://localhost:3144/allProperties')
            .then(res => res.json())
            .then(data => {
                setAllProperties(data);
            })
    }, [])
    // http://localhost:3144
    return (
        <>
            <Navbar />
            <div className='border drop-shadow-md'>
                <h1 className='mt-32 text-center text-teal-700 text-2xl font-bold'>ALL PROPERTIES</h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 pb-16'>
                    {
                        allProperties.map((property, index) => <DeleteProperty key={index} property={property} />)
                    }
                </div>
            </div>
        </>
    );
};

export default AllProperty;
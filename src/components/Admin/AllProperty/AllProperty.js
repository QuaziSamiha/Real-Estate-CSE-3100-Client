import React, { useState, useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DeleteProperty from '../DeleteProperty/DeleteProperty';

const AllProperty = () => {

    const [allProperties, setAllProperties] = useState([]);

    // const uri = http://localhost:3144/allProperties;
    useEffect(() => {
        fetch('https://shielded-stream-87364.herokuapp.com/allProperties')
            .then(res => res.json())
            .then(data => {
                setAllProperties(data);
            })
    }, [])
    // https://shielded-stream-87364.herokuapp.com
    return (
        <>
            <Navbar />
            <div className='mt-24'>
                <h1>All Property</h1>
                {
                    allProperties.map((property, index) => <DeleteProperty key={index} property={property} />)
                }
            </div>
        </>
    );
};

export default AllProperty;
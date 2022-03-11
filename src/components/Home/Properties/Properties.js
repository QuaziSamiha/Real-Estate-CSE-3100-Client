import React, { useEffect, useState } from 'react';
import property1 from '../../../images/properties1.jpg';
import property2 from '../../../images/properties2.jpg';
import property3 from '../../../images/properties3.jpg';
import property4 from '../../../images/properties4.jpg';
import property5 from '../../../images/properties5.jpg';
import property6 from '../../../images/properties6.jpg';
import Property from '../Property/Property';

const Properties = () => {


    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3144/allProperties')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProperties(data);
            })
    }, [])

    // const properties = [
    //     {
    //         img: property1,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     },
    //     {
    //         img: property2,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     },
    //     {
    //         img: property3,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     },
    //     {
    //         img: property4,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     },
    //     {
    //         img: property5,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     },
    //     {
    //         img: property6,
    //         name: 'PROPERTIES01',
    //         price: '$199',
    //         size: '1200 sq ft',
    //         roomNo: '4 Bedrooms',
    //         bathroom: '2 Bathrooms'
    //     }
    // ]

    // console.log(properties);

    return (
        <section className='pt-32'>
            <div className='border drop-shadow-md'>
                <h1 className='text-center text-teal-700 text-3xl font-bold m-8'>HOT PROPERTIES</h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 pb-16'>
                    {
                        properties.map((property, index) =>
                            <Property
                                key={index}
                                property={property}
                            />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Properties;
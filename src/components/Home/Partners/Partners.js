import React from 'react';
import partner1 from '../../../images/partner1.jpg';
import partner2 from '../../../images/partner2.jpg';
import partner3 from '../../../images/partner3.jpg';
import Partner from '../Partner/Partner';

const Partners = () => {

    const partners = [
        {
            img: partner1,
            name: 'PROJECT MANAGER'
        },
        {
            img: partner2,
            name: 'CEO & FOUNDER'
        },
        {
            img: partner3,
            name: 'SENIOR AGENT'
        }
    ]
    return (
        <section className='border drop-shadow-md my-24'>
            <h1 className='text-center text-teal-700 text-3xl font-bold m-8'>OUR PARTNERS</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 pb-16'>
                {
                    partners.map((partner, index) =>
                        <Partner
                            key={index}
                            partner={partner}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Partners;
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Partner = (props) => {
    const { img, name } = props.partner;
    return (
        <div className='border mx-4 my-4 p-4'>
            <div className='h-3/4 flex justify-center'>
                <img src={img} alt="" />
            </div>
            <div className='mt-6 mx-auto w-3/4 text-teal-700'>
                <h1 className='text-center text-lg font-semibold'>{name}</h1>
                <div className='flex justify-evenly text-2xl px-12'>
                    <div>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
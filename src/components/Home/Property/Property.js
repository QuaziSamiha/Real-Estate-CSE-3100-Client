import React from 'react';
import { useNavigate } from 'react-router-dom';

const Property = (props) => {

    const { img, name, price, size, roomNo, bathroom } = props.property;

    const navigate = useNavigate();

    return (
        <div className='border mx-4 my-4 p-4'>
            <div className='w-2/3 mx-auto'>
                <img src={img} alt="" />
            </div>
            <div className='mx-auto w-3/4'>
                <div className='py-4'>
                    <div className='flex justify-between px-8  text-teal-700'>
                        <div>
                            <h1 className='text-lg font-bold'>{name}</h1>
                        </div>
                        <div>
                            <p className='font-semibold'>{price}</p>
                        </div>
                    </div>
                    <div className='flex justify-between md:text-sm px-8 mt-4 text-teal-700'>
                        <div><p>{size}</p></div>
                        <div><p>{roomNo}</p></div>
                        <div><p>{bathroom}</p></div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <button onClick={() => { navigate('/propertyDetail') }}
                        className='bg-teal-700 text-white w-full mx-4 my-2 py-2'
                    >
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Property;
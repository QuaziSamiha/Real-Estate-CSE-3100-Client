import React, { useState } from 'react';
import propertyImg from '../../../images/properties5.jpg';

const DeleteProperty = (props) => {
    // console.log(props.property);
    const { _id, propertyName, propertyPrice, propertyRoomNo, propertyBathroomNo, propertySize } = props.property;
    const [deleteProperty, setDeleteProperty] = useState(false);

    const handleDeleteProperty = (propertyId) => {

        console.log(propertyId);
        // const uri= `http://localhost:3144/deleteProperty/${propertyId}`;

        fetch(`https://shielded-stream-87364.herokuapp.com/deleteProperty/${propertyId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('deleted successfully');
                setDeleteProperty(true);
            })
    }
    // https://shielded-stream-87364.herokuapp.com
    return (
        <div>
            {
                deleteProperty === false ?
                    <div className='border mx-4 my-4 p-4'>
                        <div className='w-2/3 mx-auto'>
                            <img src={propertyImg} alt="" />
                        </div>
                        <div className='mx-auto w-3/4'>
                            <div className='py-4'>
                                <div className='flex justify-between px-8  text-teal-700'>
                                    <div>
                                        <h1 className='text-lg font-bold'>{propertyName}</h1>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>${propertyPrice}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between md:text-sm px-8 mt-4 text-teal-700'>
                                    <div><p>{propertySize} sq feet</p></div>
                                    <div><p>{propertyRoomNo} Bedrooms</p></div>
                                    {/* <div><p>{propertyBathroomNo} Bathrooms</p></div> */}
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button
                                    onClick={() => { handleDeleteProperty(_id) }}
                                    className='bg-teal-900 text-teal-100 rounded font-semibold hover:bg-teal-100 hover:text-teal-900 w-full mx-4 my-2 py-2'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <p className='text-center pt-4 text-teal-900 text-sm'>Deleted</p>
            }
        </div>
    );
};

export default DeleteProperty;
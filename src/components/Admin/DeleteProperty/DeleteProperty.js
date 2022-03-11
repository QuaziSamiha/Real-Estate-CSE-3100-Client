import React, { useState } from 'react';

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
                    <div className='border-2 m-8'>
                        <h1>{propertyName} {_id}</h1>
                        <p>{propertyPrice}</p>
                        <p>{propertySize}</p>
                        <button
                            onClick={() => { handleDeleteProperty(_id) }}
                        >
                            Delete
                        </button>
                    </div>
                    :
                    <p>Deleted</p>
            }
        </div>
    );
};

export default DeleteProperty;
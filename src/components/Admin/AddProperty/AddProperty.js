import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProperty = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addProperty, setAddProperty] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);

        const propertyDetail = {
            propertyName: data.propertyName,
            propertyPrice: data.propertyPrice,
            propertySize: data.propertySize,
            propertyRoomNo: data.roomNo,
            propertyBathroomNo: data.bathroomNo,
            propertyImage: imageURL
        }

        fetch('http://localhost:3144/addNewProperty', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(propertyDetail)
        })
            .then(res => {
                console.log(res);
                setAddProperty(res.ok);
            })

    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '815f1fbed42fe675d6388d26293456cb');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <>
            <Navbar />
            <h1 className='mt-32 text-center text-teal-700 text-2xl font-bold'>
                ADD PROPERTY
            </h1>
            <div className='w-full flex justify-center'>
                <div className='my-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder='property name' {...register("propertyName", { required: true })} />
                        {errors.propertyName && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            type="number"
                            placeholder='price' {...register("propertyPrice", { required: true })} />
                        {errors.propertyPrice && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            type="number"
                            placeholder='size ... (square feet)' {...register("propertySize", { required: true })} />
                        {errors.propertySize && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            type="number"
                            placeholder='room no' {...register("roomNo", { required: true })} />
                        {errors.roomNo && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            type="number"
                            placeholder='bathroom no' {...register("bathroomNo", { required: true })} />
                        {errors.bathroomNo && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            onChange={handleImageUpload}
                            type="file"
                            {...register("image", { required: true })} />
                        {errors.image && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            type="submit"
                            value="Add Property" />
                    </form>
                    {
                        addProperty === true ?
                            <p>Property Added Successfully</p>
                            :
                            <span></span>
                    }
                </div>
            </div>
        </>
    );
};

export default AddProperty;
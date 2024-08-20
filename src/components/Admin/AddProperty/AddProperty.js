import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
// import axios from 'axios';

const AddProperty = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addProperty, setAddProperty] = useState(false);
    // const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);

        const propertyDetail = {
            propertyName: data.propertyName,
            propertyPrice: data.propertyPrice,
            propertySize: data.propertySize,
            propertyRoomNo: data.roomNo,
            propertyBathroomNo: data.bathroomNo
            // propertyImage: imageURL
        }
        // console.log(imageURL);

        fetch('http://localhost:3144/addNewProperty', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(propertyDetail)
        })
            .then(res => {
                setAddProperty(res.ok);
            })

    };

    // const handleImageUpload = event => {
    //     console.log('hello')
    //     const imageData = new FormData();
    //     imageData.set('key', '815f1fbed42fe675d6388d26293456cb');
    //     imageData.append('image', event.target.files[0]);

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(function (response) {
    //             console.log('hello', response);
    //             setImageURL(response.data.data.display_url);
    //             console.log(response.data.data.display_url);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    return (
        <>
            <Navbar />
            <h1 className='mt-32 text-center text-teal-700 text-2xl font-bold'>
                ADD PROPERTY
            </h1>
            <div class='drop-shadow-sm border rounded-md my-4 px-8 sm:mx-12 lg:mx-48 text-gray-500 flex justify-center'>
                <div className='my-8 w-5/6'>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            type="text"
                            placeholder='property name' {...register("propertyName", { required: true })} />
                        {errors.propertyName && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            type="number"
                            placeholder='price' {...register("propertyPrice", { required: true })} />
                        {errors.propertyPrice && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            type="number"
                            placeholder='size ... (square feet)' {...register("propertySize", { required: true })} />
                        {errors.propertySize && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            type="number"
                            placeholder='room no' {...register("roomNo", { required: true })} />
                        {errors.roomNo && <span>This field is required</span>}
                        <br /> <br />

                        <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            type="number"
                            placeholder='bathroom no' {...register("bathroomNo", { required: true })} />
                        {errors.bathroomNo && <span>This field is required</span>}
                        <br /> <br />

                        {/* <input
                            className='drop-shadow-md border p-2 font-semibold text-md w-full rounded'
                            onChange={handleImageUpload}
                            type="file"
                            {...register("image", { required: true })} />
                        {errors.image && <span>This field is required</span>}
                        <br /> <br /> */}

                        <input
                            className='hover:bg-teal-200 hover:text-teal-900 bg-teal-900 text-teal-200 py-2 my-2 font-semibold text-md w-full rounded'
                            type="submit"
                            value="Add Property" />
                    </form>
                    {
                        addProperty === true ?
                            <p className='text-center pt-4 text-teal-900 text-sm'>Property Added Successfully</p>
                            :
                            <span></span>
                    }
                </div>
            </div>
        </>
    );
};

export default AddProperty;
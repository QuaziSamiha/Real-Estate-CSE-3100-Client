import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';

const AddAdmin = () => {

    const [addAdmin, setAddAdmin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:3144/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                setAddAdmin(res.ok);
                console.log(res);
            })
    };

    return (
        <>
            <Navbar />
            <div className='mt-24'>
                <h1 className='mt-32 text-center text-teal-700 text-2xl font-bold'>ADD NEW ADMIN</h1>
                <div class='drop-shadow-sm border rounded-md my-4 px-8 sm:mx-12 lg:mx-48 text-gray-500 flex justify-center'>
                    <div className='my-8 w-5/6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='drop-shadow-md border p-2 text-md w-full rounded'
                                type='text'
                                placeholder='enter new admin email address please...'
                                {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                            <br /> <br />
                            <input
                                className='hover:bg-teal-200 hover:text-teal-900 bg-teal-900 text-teal-200 py-2 my-2 font-semibold text-md w-full rounded'
                                type="submit"
                                value='Add Admin' />
                        </form>
                    </div>
                </div>
                {
                    addAdmin === true ?
                        <p className='text-center pt-4 text-teal-900 text-sm'>Admin Added Successfully</p>
                        :
                        <span></span>
                }
            </div>
        </>
    );
};

export default AddAdmin;
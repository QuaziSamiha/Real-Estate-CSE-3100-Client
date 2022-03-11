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
                <h1 className='text-center font-bold text-2xl text-teal-700'>ADD NEW ADMIN</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text'
                        placeholder='enter new admin email address please...'
                        {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                    <br /> <br />
                    <input type="submit" value='Add Admin' />
                </form>

                {
                    addAdmin === true ?
                        <p>Admin Added Successfully</p>
                        :
                        <span></span>
                }
            </div>
        </>
    );
};

export default AddAdmin;
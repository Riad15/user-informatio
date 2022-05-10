import React from 'react';
import { useForm } from "react-hook-form";

const CustomerForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (

        <div className='border-2 rounded border-black w-1/2 mx-80 mt-10 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='border rounded w-1/2 m-4 p-2' {...register("Name")} /> <br />
                <input placeholder='address' className='border rounded w-1/2 m-4 p-2' {...register("Address")} /> <br />
                <input placeholder='age' className='border rounded w-1/2 m-4 p-2' {...register("Age")} /> <br />
                <select className='border rounded w-1/2 mb-4 p-2' {...register("district")}>
                    <option selected disabled>--Select City--</option>
                    <option value="Dhaka">dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="khulna">khulna</option>
                    <option value="kishurgonj">kishurgonj</option>
                    <option value="tangil">tangil</option>
                    <option value="Gazipur">Gazipur</option>
                </select> <br />
                <select className='border rounded w-1/2 mb-4 p-2' {...register("gender")}>
                    <option selected disabled>--Gender--</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select> <br />
                <input className='border rounded w-1/2 mb-4 p-2' type="submit" />
            </form>
        </div>
    );
}
export default CustomerForm;
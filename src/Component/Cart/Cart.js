import React from 'react';

const Cart = (props) => {
    const { name, address, district, age, gender } = props.customer;
    return (
        <div className='w-96 shadow-2xl shadow-lime-200 rounded p-2 ml-9 bg-lime-200'>
            <p className='text-4xl text-indigo-400'>name: {name}</p>
            <p className='text-2xl'>home town:{district}</p>
            <p className='text-2xl'>age:{age}</p>
            <p className='text-2xl'>gender:{gender}</p>
            <p className='text-2xl'>address: {address}</p>

        </div>
    );
};

export default Cart;
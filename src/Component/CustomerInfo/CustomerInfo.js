import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Cart from '../Cart/Cart';

const CustomerInfo = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/customers`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-4xl'>Our Customer Information</h1>
            <div className='grid grid-cols-3  gep-2  '>
                {
                    customers.map(data => <Cart
                        key={data._id}
                        customer={data}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default CustomerInfo;
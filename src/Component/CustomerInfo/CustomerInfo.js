import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CustomerInfo = () => {
    const { user } = useAuthState(auth);
    console.log(user);

    return (
        <div>
            <h1 className='text-center'>this is Customer Information</h1>
        </div>
    );
};

export default CustomerInfo;
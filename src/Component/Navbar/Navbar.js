import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-current'>
            <ul className='flex flex-wrap justify-end'>
                <li className='mr-7 p-5 text-white'><Link to="/customerInfo">Customer Info</Link></li>
                <li className='mr-7 p-5 text-white'><Link to="/customerForm">Customer Form</Link></li>
                <li className='mr-7 p-5 text-white'><Link to="/signIn">Sign In</Link></li>
                <li className='mr-7 p-5 text-white'><Link to="/signup">Sign UP</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
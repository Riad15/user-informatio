import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className='bg-current'>
            <ul className='flex flex-wrap justify-end'>
                <li className='mr-7 p-5 text-white'><Link to="/customerInfo">Customer Info</Link></li>
                <li className='mr-7 p-5 text-white'><Link to="/customerForm">Customer Form</Link></li>
                {user ?
                    <Link className='mr-7 p-5 text-white' onClick={() => signOut(auth)} eventKey={3} as={Link} to="/login">
                        Sign Out
                    </Link>
                    :
                    <li className='mr-7 p-5 text-white'><Link to="/signIn">Sign In</Link></li>
                }

                <li className='mr-7 p-5 text-white'><Link to="/signup">Sign UP</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
import auth from '../../firebase.init'
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const ConfirmRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        return <p className='text-red'>error:{error.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return <p className='text-3xl text-center'>Registered User</p>
    }
    console.log(user);
    const registerUser = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmRef.current.value;
        if (password.length > 5) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(email, password);
                window.alert('successfully complete your registration');
            } else {
                window.alert('incorrect your password')
            }
        } else {
            window.alert('password must be more then 6 digit')
        }

        event.preventDefault();
    }

    return (
        <div>
            <div className='border-2 rounded border-black w-1/2 mx-80 mt-10 '>
                <h1 className='my-3 text-3xl'>Sign Up Please</h1>
                <form onSubmit={registerUser}>
                    <input ref={emailRef} className='border rounded w-1/2 mb-4 p-2' required placeholder='Email' type="email" name="email" id="Email" /><br />
                    <input ref={passwordRef} className='border rounded w-1/2 mb-4 p-2' required placeholder='Password' type="password" name="password" id="Password" /> <br />
                    <input ref={ConfirmRef} className='border rounded w-1/2 mb-4 p-2' required placeholder='Confirm  Password' type="password" name="confirmPassword" id="ConfirmPassword" /> <br />
                    <input className='border rounded w-1/2 mb-4 p-2' type="submit" value="Sign In" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
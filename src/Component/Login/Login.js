import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const formSubmit = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!user) {
            window.alert('your email or password is incorrect')
        } else {
            signInWithEmailAndPassword(email, password);
        }

        event.preventDefault();
    }
    console.log(user);
    const handelResetPassWord = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
        window.alert('send email');

    }
    return (
        <div className='border-2 rounded border-black w-1/2 mx-80 mt-10 '>
            <h1 className='my-3 text-3xl'>Sign In Please</h1>
            <form onSubmit={formSubmit}>
                <input ref={emailRef} className='border rounded w-1/2 mb-4 p-2' required placeholder='Email' type="email" name="email" id="" /><br />
                <input ref={passwordRef} className='border rounded w-1/2 mb-4 p-2' required placeholder='Password' type="password" name="password" id="" /> <br />
                <input className='border rounded w-1/2 mb-4 p-2' type="submit" value="Sign In" />
            </form>
            <p className='text-2xl'>forget Password ?<a className='text-sky-700 underline decoration-1' onClick={handelResetPassWord} href=''>Reset passWord</a> </p>
        </div>
    );
};

export default Login;
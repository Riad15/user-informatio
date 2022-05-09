import React from 'react';

const Login = () => {
    return (
        <div className='border-2 rounded border-black w-1/2 mx-80 mt-10 '>
            <h1 className='my-3 text-3xl'>Sign In Please</h1>
            <form action="">
                <input className='border rounded w-1/2 mb-4 p-2' required placeholder='Email' type="email" name="email" id="" /><br />
                <input className='border rounded w-1/2 mb-4 p-2' required placeholder='Password' type="password" name="password" id="" /> <br />
                <input className='border rounded w-1/2 mb-4 p-2' type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default Login;
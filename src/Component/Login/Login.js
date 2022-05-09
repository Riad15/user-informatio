import React from 'react';

const Login = () => {
    return (
        <div className='border w-1/2 mx-80 mt-10 '>
            <h1 className='my-3 text-3xl'>Sign In Please</h1>
            <form action="">
                <input className='border w-1/2 mb-4 p-2' placeholder='Email' type="email" name="email" id="" /><br />
                <input className='border w-1/2 mb-4 p-2' placeholder='Password' type="password" name="password" id="" /> <br />
                <input className='border w-1/2 mb-4 p-2' type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default Login;
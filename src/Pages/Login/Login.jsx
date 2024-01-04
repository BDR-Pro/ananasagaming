// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import authService from './authService';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accessToken = await authService.login(username, password);
            saveToken(accessToken);
            setLoggedIn(true);
            console.log('Login successful', accessToken);
            window.location.href = '/';
        } catch (error) {
            // Handle login error
            console.error('Login failed', error);
        }
    };

    const saveToken = (token) => {
        localStorage.setItem('accessToken', token);
    };

    const setLoggedIn = (status) => {
        localStorage.setItem('loggedIn', status.toString());
    };

    return (
        <div className="bg-primary text-white">
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7 border-2 bg-gray-700/50 text-white rounded-lg'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Username</span>
                            </label>
                            <input
                                type="text"
                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input input-bordered w-full max-w-xs text-primary"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered w-full max-w-xs text-primary"
                            />
                            <label className="label">
                                <span className="label-text text-white">Forget Password?</span>
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className='btn btn-accent w-full'
                        />
                    </form>
                    <p className='text-center pt-2'>
                        <Link className='text-lg text-white' to="/signup">
                            Create New Account
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full text-white'>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

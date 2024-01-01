// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {



    return (
        <div className="bg-primary text-white">
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7 border-2 backdrop-blur-xl text-white rounded-lg'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form >
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white">Email</span></label>
                            <input type="text" className="input input-bordered w-full max-w-xs text-primary" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-white">Password</span></label>
                            <input type="password" className="input input-bordered w-full max-w-xs text-primary" />
                            <label className="label"> <span className="label-text text-white">Forget Password?</span></label>
                        </div>
                        <input className='btn btn-accent w-full' value="Login" type="submit" />
                    </form>
                    <p className='text-center pt-2'> <Link className='text-lg text-white' to="/signup">Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
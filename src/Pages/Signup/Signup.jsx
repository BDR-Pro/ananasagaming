// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {



    return (
        <div className='h-[800px] flex justify-center items-center bg-blue-950'>
            <div className='w-96 p-7 border-2 backdrop-blur-xl bg-white/75'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" name='name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" name='email' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" name='password' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
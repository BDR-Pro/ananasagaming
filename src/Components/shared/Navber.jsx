/* eslint-disable no-unused-vars */
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
const Navber = () => {
    return (
        <div className="flex justify-between items-center pr-3 fixed z-50 w-full backdrop-blur-xl bg-white/30">
            <img src={logo} alt="" width={150} height={150} />
            <div className="w-[70%]">
                <form action="w-full">
                    <div className='relative'>
                        <input type="text" placeholder="Search 860,872 games" className="input input-bordered w-full bg-inherit border-2 border-slate-500" />
                        <button>
                            <span className='absolute top-[50%] right-[1%] translate-x-[-0%] translate-y-[-50%]'>
                                <IoSearch size={25} />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="">
                <ul className='flex items-center gap-3'>
                    <li><Link to="/login" className='btn btn-outline btn-sm'>Login</Link></li>
                    <li><Link to="/signup" className='btn btn-outline btn-sm'>Signup</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;
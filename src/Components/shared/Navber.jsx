/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
const Navber = () => {
    const [toggle, setToggle] = useState(false);
    const handleButton = (value) => {
        setToggle(value);
        console.log(toggle);
    }
    return (
        <>
            <div className="hidden md:flex justify-between items-center pr-3 fixed z-50 w-full backdrop-blur-xl bg-white/30">
                <Link to="/">
                    <img src={logo} alt="" width={150} height={150} style={{ filter: 'hue-rotate(120deg)' }} />
                </Link>
                <div className="">
                    <ul className='flex items-center gap-3'>
                        <li className="relative">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search games.."
                                className="bg-gray-700/50 px-4 py-2 rounded-2xl"
                            />
                            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
                        </li>
                        <li><Link to="/profile" className='btn btn-primary bg-blue-950 btn-sm'>Profile</Link></li>
                        <li><Link to="/login" className='btn btn-primary bg-blue-950 btn-sm'>Login</Link></li>
                        <li><Link to="/signup" className='btn btn-primary bg-blue-950 btn-sm'>Signup</Link></li>
                    </ul>
                </div>
            </div>

            <div className="md:hidden flex justify-between items-center pr-3 fixed z-50 w-full backdrop-blur-xl bg-white/30">
                <Link to="/">
                    <img src={logo} alt="" width={150} height={150} style={{ filter: 'hue-rotate(120deg)' }} />
                </Link>
                <div className="">
                    <ul className='flex items-center gap-3 relative'>
                        <li className="relative">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search games.."
                                className="bg-gray-700/50 px-4 py-2 rounded-2xl"
                            />
                            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
                        </li>
                        <li><button onClick={() => handleButton(!toggle)} className='btn btn-sm btn-ghost'><FaBars size={25} /></button></li>
                        {
                            toggle
                            &&
                            <div className='md:hidden absolute w-[220px] px-3 py-2 rounded-lg bg-slate-400 right-0 top-[50px] shadow-xl'>
                                <ul className='flex flex-col gap-1'>
                                    <li><Link to="/profile" className='block border-2 rounded-md px-3 py-2 text-center border-blue-950 hover:bg-white hover:text-blue-950 font-bold bg-blue-950 text-white'>Profile</Link></li>
                                    <li><Link to="/login" className='block border-2 rounded-md px-3 py-2 text-center border-blue-950 hover:bg-white hover:text-blue-950 font-bold bg-blue-950 text-white'>Login</Link></li>
                                    <li><Link to="/signup" className='block border-2 rounded-md px-3 py-2 text-center border-blue-950 hover:bg-white hover:text-blue-950 font-bold bg-blue-950 text-white'>Signup</Link></li>
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navber;
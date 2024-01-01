/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';
const GameDetailsCard = ({ singleData }) => {
    const { image, title, description, genra } = singleData;
    return (
        <div className="card max-w-5xl mx-auto bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-[400px] object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary"><Link to="#">{genra}</Link></div>
                </h2>
                <p>{description}</p>
                <div className="card-actions">
                    <div className="badge badge-outline"><Link to="#">Run The Game</Link></div>
                    <div className="badge badge-outline"><Link to="#">Favorite</Link></div>
                </div>
            </div>
            <div className="px-5 pb-10">
                <h3 className='text-2xl font-semibold'>Comments</h3>
                <div className="flex flex-col border-2 px-3 py-2 rounded-lg mb-4">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png" className='w-[50px] h-[50px] rounded-full' alt="" />
                    <p>John dow</p>
                    <span className='flex items-center gap-1'>
                        <p>Rating:</p>
                        <ul className='flex text-yellow-500'>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                        </ul>
                    </span>
                    <p>good game for paly online</p>
                </div>
                <div className="flex flex-col border-2 px-3 py-2 rounded-lg mb-4">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png" className='w-[50px] h-[50px] rounded-full' alt="" />
                    <p>John dow</p>
                    <span className='flex items-center gap-1'>
                        <p>Rating:</p>
                        <ul className='flex text-yellow-500'>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                        </ul>
                    </span>
                    <p>good game for paly online</p>
                </div>
                <div className="flex flex-col border-2 px-3 py-2 rounded-lg mb-4">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png" className='w-[50px] h-[50px] rounded-full' alt="" />
                    <p>John dow</p>
                    <span className='flex items-center gap-1'>
                        <p>Rating:</p>
                        <ul className='flex text-yellow-500'>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                        </ul>
                    </span>
                    <p>good game for paly online</p>
                </div>
                <div className="flex flex-col border-2 px-3 py-2 rounded-lg mb-4">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912642/avatar-icon-md.png" className='w-[50px] h-[50px] rounded-full' alt="" />
                    <p>John dow</p>
                    <span className='flex items-center gap-1'>
                        <p>Rating:</p>
                        <ul className='flex text-yellow-500'>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                            <li><MdStar /></li>
                        </ul>
                    </span>
                    <p>good game for paly online</p>
                </div>
                <form action="">
                    <div className="mb-2">
                        <label htmlFor="" className='pl-1 font-semibold'>Rating</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full outline-1" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className='pl-1 font-semibold'>Review</label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Give your feedback"></textarea>
                    </div>
                    <div className="mb-2">
                        <button className='btn btn-md bg-blue-950 text-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GameDetailsCard;
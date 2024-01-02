// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FiEdit } from "react-icons/fi";
import RecentPlay from '../../Components/Home/RecentPlay/RecentPlay';
import StreamerReview from '../../Components/Home/Review/StreamerReview';
const Profile = () => {
    return (
        <div className='bg-primary  min-h-screen py-16 md:py-32 px-2 md:px-10 '>
            <div className="card w-full bg-base-100 shadow-xl relative">

                <div className="card w-[114px] shadow-xl absolute top-[270px] left-[33px] rounded-md border-2 border-green-900">
                    <figure><img src="https://www.upwork.com/mc/documents/designelementsavatar2.png" alt="Shoes" /></figure>
                    <div className="">
                        <h1 className='text-[#00FFFF] text-center pb-2 tex-sm'>@Reshad</h1>
                    </div>
                </div>

                <figure><img src="https://wallpaperset.com/w/full/f/6/c/211453.jpg" alt="Shoes" className='w-full h-96 object-cover' /></figure>
                <div className="card-body bg-primary text-white">
                    <div className="flex justify-between items-center">
                        <button className='btn btn-ghost btn-sm bg-slate-600 text-white'><FiEdit />Edit profile</button>
                        <div className="flex gap-2 md:gap-3">
                            <div className="flex flex-col items-center">
                                <span className='font-semibold'>1</span>
                                <span className='font-normal md:font-semibold text-sm md:text-md '>Played</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className='font-semibold'>21</span>
                                <span className='font-normal md:font-semibold text-sm md:text-md '>Listed Games</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className='font-semibold'>1345$</span>
                                <span className='font-normal md:font-semibold text-sm md:text-md '>Revenue</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h2 className='font-semibold text-2xl'>About</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos explicabo quaerat? Odio ducimus consectetur dignissimos voluptate aliquam quisquam quas id soluta! Aperiam odio, iste facilis perferendis eligendi velit unde architecto error repellat blanditiis quos saepe eum non dicta natus magnam? Ut cupiditate corrupti explicabo magni a esse assumenda, amet aut, cumque dicta accusamus officiis, quam eligendi quisquam. Voluptatem culpa dolor ab. Dolorum vel fugit praesentium eveniet hic repellat ipsam inventore a. Praesentium odit molestias molestiae recusandae sint odio, vero ea, magni facilis sed rem cumque laudantium, et impedit exercitationem cupiditate nemo aliquam ipsa dolores asperiores consequuntur. Corporis, doloremque deserunt!</p>
                    </div>

                    <RecentPlay />
                    <StreamerReview />
                </div>
            </div>
        </div>
    );
};

export default Profile;
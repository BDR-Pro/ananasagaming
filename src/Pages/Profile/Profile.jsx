// Profile.js
import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import RecentPlay from '../../Components/Home/RecentPlay/RecentPlay';
import StreamerReview from '../../Components/Home/Review/StreamerReview';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch('http://localhost:8000/users/', {
                    credentials: 'include',
                });
                if (!userResponse.ok) {
                    throw new Error(`HTTP error! Status: ${userResponse.status}`);
                }
                const userData = await userResponse.json();
                console.log(userData);
                setCurrentUser(userData.currentUser);

                if (userData.currentUser) {
                    const profileResponse = await fetch(`http://localhost:8000/api/getProfile/${userData.currentUser}/`);
                    if (!profileResponse.ok) {
                        throw new Error(`HTTP error! Status: ${profileResponse.status}`);
                    }
                    const profileData = await profileResponse.json();

                    profileData.avatar = addBaseUrl(profileData.avatar);
                    profileData.header = addBaseUrl(profileData.header);
                    profileData.recentlyPlayedGames.forEach((game) => {
                        game.image = addBaseUrl(game.image);
                    });

                    console.log(profileData);
                    setProfileData(profileData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const addBaseUrl = (relativeUrl) => {
        const baseUrl = 'http://localhost:8000';
        return `${baseUrl}${relativeUrl}`;
    };

    return (
        <div className='bg-primary  min-h-screen py-16 md:py-32 px-2 md:px-10 '>
            {profileData && (
                <div className="card w-full bg-base-100 shadow-xl relative">

                    <div className="card w-[114px] shadow-xl absolute top-[270px] left-[33px] rounded-md border-2 border-green-900">
                        <figure><img src={profileData.avatar} alt="Avatar" /></figure>
                        <div className="text-center">
                        <h1 className='text-[#00FFFF] text-sm'>{`${profileData.nickname}`}</h1>
                            <h1 className='text-[#00FFFF] text-xsm'>{`@${profileData.username}`}</h1>
                        </div>
                    </div>

                    <figure><img src={profileData.header} alt="Header" className='w-full h-96 object-cover' /></figure>
                    <div className="card-body bg-primary text-white">
                        <div className="flex justify-between items-center">
                            {profileData.isCurrentUser ? (
                                <button className='btn btn-ghost btn-sm bg-slate-600 text-white'><FiEdit />Edit profile</button>
                            ) : (
                                <button className='btn btn-ghost btn-sm bg-slate-600 text-white'>Follow</button>
                            )}
                            <div className="flex gap-2 md:gap-3">
                                <div className="flex flex-col items-center">
                                    <span className='font-semibold'>{profileData.playedGames}</span>
                                    <span className='font-normal md:font-semibold text-sm md:text-md '>Played</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className='font-semibold'>{profileData.NumberOfListedGames}</span>
                                    <span className='font-normal md:font-semibold text-sm md:text-md '>Listed Games</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className='font-semibold'>{profileData.revenue}</span>
                                    <span className='font-normal md:font-semibold text-sm md:text-md '>Revenue</span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h2 className='font-semibold text-2xl'>About</h2>
                            <p>{profileData.bio}</p>
                        </div>

                        <RecentPlay recentGames={profileData.recentlyPlayedGames} />
                        <StreamerReview reviews={profileData.reviews} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;

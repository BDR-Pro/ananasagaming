// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import CharacterPng1 from "../../../assets/character3.png";
import useDataFetcher from "../../../hook/useDataFetcher";
import ReviewSkeleton from "../../shared/ReviewSkeleton";

const StreamerReview = () => {
    const { data: reviews, error, loading } = useDataFetcher("http://localhost:5000/reviews");
    if (loading) {
        return (
            <div className="flex gap-2 justify-evenly my-5 mx-4">
                <ReviewSkeleton />
                <ReviewSkeleton />
                <ReviewSkeleton />
                <ReviewSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex gap-2 justify-evenly my-5 mx-4">
                <ReviewSkeleton />
                <ReviewSkeleton />
                <ReviewSkeleton />
                <ReviewSkeleton />
            </div>
        );
    }
    return (
        <>
            <section className="py-10 px-10 bg-primary text-white">
                <div className="container relative">
                    {/* Header section */}
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold font-serif">Reviews For The Streamer</h1>
                        <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
                            View All
                        </button>
                    </div>
                    {/* Trending Games Card section */}
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-1 mt-8">
                            {/* Game Card */}
                            {reviews.slice(0, 4).map((item) => {
                                const fullStars = Math.floor(item.rating);
                                const decimalPart = item.rating - fullStars;
                                return (
                                    <div className="flex flex-col items-center justify-center" key={item.id}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[150px] h-[150px] object-cover rounded-full"
                                        />
                                        <div className="text-center">
                                            <p>{item.name}</p>
                                            <p>{item.review}</p>
                                            <p className="flex items-center justify-center gap-2">
                                                <ul className="flex gap-1">
                                                    {/* Full stars */}
                                                    {Array.from({ length: fullStars }, (_, index) => (
                                                        <li key={index}>
                                                            <span>
                                                                <FaStar />
                                                            </span>
                                                        </li>
                                                    ))}
                                                    {/* Partial star for decimal rating */}
                                                    {decimalPart > 0 && (
                                                        <li>
                                                            <span style={{ width: `${decimalPart * 100}%` }}>
                                                                <FaRegStarHalfStroke />
                                                            </span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Character Png */}
                    <img
                        src={CharacterPng1}
                        alt="not found"
                        className="absolute left-[-120px] top-5 z-[1] h-[340px]"
                    />
                </div>
            </section>
        </>
    );
};

export default StreamerReview;
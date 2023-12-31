// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import CharacterPng1 from "../../../assets/character3.png";
import Game1 from "../../../assets/game1.jpg";
import Game2 from "../../../assets/game2.jpg";
import Game3 from "../../../assets/game3.jpg";

const GameCardData = [
    {
        id: 4,
        title: "Game Title3",
        image: Game1,
        rating: 3.5,
    },
    {
        id: 5,
        title: "Game Title4",
        image: Game2,
        rating: 4.5,
    },
    {
        id: 6,
        title: "Game Title5",
        image: Game3,
        rating: 5,
    },
];
const StreamerReview = () => {
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
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
                            {/* Game Card */}
                            {GameCardData.map((item) => {
                                const fullStars = Math.floor(item.rating);
                                const decimalPart = item.rating - fullStars;
                                return (
                                    <div className="" key={item.id}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[200px] h-[200px] object-cover rounded-full"
                                        />
                                        <div className="text-center">
                                            <p>{item.title}</p>
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
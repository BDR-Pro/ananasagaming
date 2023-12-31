// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import CharacterPng1 from "../../../assets/character1.png";
// import Game1 from "../../../assets/game1.jpg";
// import Game2 from "../../../assets/game2.jpg";
// import Game3 from "../../../assets/game3.jpg";
import useDataFetcher from "../../../hook/useDataFetcher";

// const GameCardData = [
//     {
//         id: 1,
//         title: "Game Title",
//         image: Game1,
//         followers: 30,
//     },
//     {
//         id: 2,
//         title: "Game Title",
//         image: Game2,
//         followers: 35,
//     },
//     {
//         id: 3,
//         title: "Game Title2",
//         image: Game3,
//         followers: 35,
//     },
//     {
//         id: 4,
//         title: "Game Title3",
//         image: Game1,
//         followers: 35,
//     },
//     {
//         id: 5,
//         title: "Game Title4",
//         image: Game2,
//         followers: 35,
//     },
//     {
//         id: 6,
//         title: "Game Title5",
//         image: Game3,
//         followers: 55,
//     },
// ];
const TrendingGame = () => {
    const { data, error, loading } = useDataFetcher("http://localhost:5000/trending")
    return (
        <>
            <section className="py-10 px-10 bg-primary text-white">
                <div className="container relative">
                    {/* Header section */}
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold font-serif">Currently Trending Games</h1>
                        <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
                            View All
                        </button>
                    </div>
                    {/* Trending Games Card section */}
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
                            {/* Game Card */}
                            {data.map((item) => {
                                return (
                                    <Link key={item.id} to={`/details/${item.id}`}>
                                        <div className="" key={item.id}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-[200px] object-cover rounded-xl"
                                            />
                                            <div className="text-center">
                                                <p>{item.title}</p>
                                                <p className="flex items-center justify-center gap-2">
                                                    <FaFire />
                                                    <span>{item.followers}</span> followers
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Character Png */}
                    <img
                        src={CharacterPng1}
                        alt="not found"
                        className="absolute left-[-120px] top-0 z-[1] h-[340px]"
                    />
                </div>
            </section>
        </>
    );
};

export default TrendingGame;
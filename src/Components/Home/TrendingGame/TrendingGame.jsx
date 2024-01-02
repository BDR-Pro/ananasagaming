// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import CharacterPng1 from "../../../assets/character1.png";
import useDataFetcher from "../../../hook/useDataFetcher";
import Skleton from "../../shared/Skleton";

const TrendingGame = () => {
    const [showAll, setShowAll] = useState(false);
    const { data, error, loading, fetchData } = useDataFetcher("http://localhost:5000/trending")

    useEffect(() => {
        if (showAll) {
            fetchData("http://localhost:5000/trending");
        }
    }, [showAll, fetchData]);

    if (loading) {
        return (
            <div className="flex gap-2 justify-evenly my-5 mx-4">
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex gap-2 justify-evenly my-5 mx-4">
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
                <Skleton />
            </div>
        );
    }

    const displayedData = showAll ? data : data.slice(0, 7);
    return (
        <>
            <section className="py-10 pt-0 px-3 md:px-10 bg-primary text-white">
                <div className="container relative">
                    {/* Header section */}
                    <div className="flex justify-between">
                        <h1 className="text-xl md:text-3xl font-bold font-serif">Currently Trending</h1>
                        <button className="bg-gray-400/50 text-white rounded-xl px-2 py-1 md:px-4 md:py-2" onClick={() => setShowAll(!showAll)}>
                            View All
                        </button>
                    </div>
                    {/* Trending Games Card section */}
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
                            {/* Game Card */}
                            {displayedData.map((item) => {
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
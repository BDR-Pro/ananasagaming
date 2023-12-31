// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../hook/useDataFetcher';

const GameDetails = () => {
    const { id } = useParams();
    const { data, error, loading } = useDataFetcher(`http://localhost:5000/trending/${id}`);
    console.log(data);
    return (
        <div className='pt-20 px-10 min-h-screen bg-blue-950'>
            all game infromation comes here
        </div>
    );
};

export default GameDetails;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='pt-20 px-10 min-h-screen bg-blue-950'>
            all game infromation comes here
        </div>
    );
};

export default GameDetails;
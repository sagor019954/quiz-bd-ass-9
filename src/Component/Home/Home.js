import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Picture from '../img/7520601.png'
import './Home.css'
const Home = () => {
    const cardData = useLoaderData();
    const { data } = cardData;
    return (
        <div className='home-container'>
            <div className='img-section'>
                <img src={Picture}></img>
            </div>
            <div>
                <p>data length{data.length}</p>
            </div>
        </div>
    );
};

export default Home;
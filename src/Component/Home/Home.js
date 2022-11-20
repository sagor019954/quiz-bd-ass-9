import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Picture from '../img/7520601.png'
import Singlecard from '../Singlecard/Singlecard';
import './Home.css'
const Home = () => {
    const cardData = useLoaderData();
    const { data } = cardData;
    return (
        <div className='home-container'>
            <div className='img-section'>
                <img src={Picture}></img>
            </div>
            <div className='card-container'>
                {
                    data.map(singlecard => <Singlecard key={singlecard.id} singlecard={singlecard}></Singlecard>)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Singlecard.css'
const Singlecard = ({ singlecard }) => {
    const { id, logo, name, total } = singlecard;
    return (
        <div className='single-card-container'>
            <img src={logo}></img>
            <div className='card-details'>
                <div>
                    <h3>{name}</h3>
                    <small>{total}</small>
                </div>
                <div>
                    <Link to={`home/${id}`}> Start </Link>
                </div>
            </div>
        </div>
    );
};

export default Singlecard;
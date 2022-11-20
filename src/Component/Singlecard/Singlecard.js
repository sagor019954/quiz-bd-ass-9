import React from 'react';
import './Singlecard.css'
const Singlecard = ({ singlecard }) => {
    const { id, logo, name, total } = singlecard;
    console.log(singlecard);
    return (
        <div className='single-card-container'>
            <img src={logo}></img>
            <div className='card-details'>
                <div>
                    <h3>{name}</h3>
                    <small>{total}</small>
                </div>
                <div>
                    <button> Start </button>
                </div>
            </div>
        </div>
    );
};

export default Singlecard;
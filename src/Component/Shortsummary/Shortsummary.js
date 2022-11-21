import React from 'react';
import './Shortsummary.css'
const Shortsummary = ({ summary }) => {
    const { name, total } = summary
    return (
        <div className="summary">
            <h2>Topic: {name}</h2>
            <p>Question Topic: {total}</p>
        </div>
    );
};

export default Shortsummary;
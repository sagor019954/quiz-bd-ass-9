import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shortsummary from '../Shortsummary/Shortsummary';
import './Answe.css'

const Answer = () => {
    const qsnsummary = useLoaderData();
    const { data } = qsnsummary
    return (
        <div className="summary-container">
            {
                data.map(summary => <Shortsummary key={summary.id} summary={summary}></Shortsummary>)
            }
        </div>
    );
};

export default Answer;
import React from 'react';
import Checkquestion from '../Checkquestion/Checkquestion';
import './Questionpaper.css';
// import { BeakerIcon } from '@heroicons/vue/24/solid';
const Questionpaper = ({ singlequestion }) => {
    const { id, question, options } = singlequestion;
    return (
        <div className='question'>
            <div>
                <h4> {question}</h4>
            </div>
            <div>
                {options.map(option => <Checkquestion key={id} option={option}></Checkquestion>)}
            </div>
        </div>
    );
};

export default Questionpaper;
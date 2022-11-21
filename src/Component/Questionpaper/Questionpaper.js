import React from 'react';
import Checkquestion from '../Checkquestion/Checkquestion';
import './Questionpaper.css';
// import { BeakerIcon } from '@heroicons/vue/24/solid';
const Questionpaper = ({ singlequestion }) => {
    console.log(singlequestion);
    const { id, question, options, correctAnswer } = singlequestion;
    return (
        <div className='question'>
            <div>
                <h4> {question}</h4>

            </div>
            <div>
                {options.map(option => <Checkquestion key={id} correctAnswer={correctAnswer} option={option}></Checkquestion>)}
            </div>
            <div className="correctionanswer">
                <h2>{correctAnswer}</h2>
            </div>
        </div>
    );
};

export default Questionpaper;
import React from 'react';
import Checkquestion from '../Checkquestion/Checkquestion';
import './Questionpaper.css';
import { AiFillEye } from 'react-icons/ai';
const Questionpaper = ({ singlequestion }) => {
    const { id, question, options, correctAnswer } = singlequestion;
    function display(value) {
        if (value === true) {
            alert(correctAnswer)
        }
    }

    return (
        <div className='question'>
            <div className='questionheader'>
                <h4> {question} </h4>
                <p onClick={() => display(true)}><AiFillEye /></p >
            </div>
            <div>
                {options.map(option => <Checkquestion key={id} correctAnswer={correctAnswer} option={option}></Checkquestion>)}
            </div>
        </div>
    );
};

export default Questionpaper;
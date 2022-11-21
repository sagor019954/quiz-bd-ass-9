import React from 'react';

const Checkquestion = ({ option, correctAnswer }) => {
    function checkoption(option) {
        if (option === correctAnswer) {
            alert('answer correct')
            return;
        }
        else {
            alert('answer wrong')
        }
    }
    return (
        <div>
            <input onClick={() => checkoption(option)} type="checkbox" />
            <label  >{option}</label>
        </div>
    );
};

export default Checkquestion;
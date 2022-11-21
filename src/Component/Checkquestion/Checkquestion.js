import React from 'react';

const Checkquestion = ({ option }) => {
    console.log(option);
    // console.log(correctAnswer);
    return (
        <div>
            <input type="checkbox" />
            <label >{option}</label>
        </div>
    );
};

export default Checkquestion;
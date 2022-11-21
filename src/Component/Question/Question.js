import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Question = () => {
    const Questiondata = useLoaderData();
    const { data } = Questiondata;
    const { questions } = data
    return (
        <div>
            <h1>this is question paper{questions.length}</h1>
        </div>
    );
};

export default Question;
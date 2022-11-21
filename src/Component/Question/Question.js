import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questionpaper from '../Questionpaper/Questionpaper';

const Question = () => {
    const Questiondata = useLoaderData();
    const { data } = Questiondata;
    const { questions } = data
    return (
        <div>
            {
                questions.map(question => <Questionpaper key={question.id} singlequestion={question}></Questionpaper>)
            }
        </div>
    );
};

export default Question;
import React from 'react';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

const Questions = ({ questions, currentQuestionIndex, onAnswerSelected }) => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="questions-container">
            <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />
            <QuestionCard 
                question={currentQuestion.question} 
                options={currentQuestion.options} 
                onAnswerSelected={onAnswerSelected} 
            />
        </div>
    );
};

export default Questions;
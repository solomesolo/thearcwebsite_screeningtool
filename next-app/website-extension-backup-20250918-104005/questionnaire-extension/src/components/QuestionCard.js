import React from 'react';
import './components.css';

const QuestionCard = ({ question, options, onSelect }) => {
    return (
        <div className="question-card">
            <h2 className="question-text">{question}</h2>
            <div className="options-container">
                {options.map((option, index) => (
                    <button 
                        key={index} 
                        className="option-button" 
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
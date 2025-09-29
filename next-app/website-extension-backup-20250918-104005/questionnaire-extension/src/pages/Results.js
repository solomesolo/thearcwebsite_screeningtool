import React from 'react';
import './styles/components.css';

const Results = ({ results }) => {
    return (
        <div className="results-container">
            <h1 className="results-title">Your Questionnaire Results</h1>
            <div className="results-content">
                {results.map((result, index) => (
                    <div key={index} className="result-card">
                        <h2 className="result-question">{result.question}</h2>
                        <p className="result-answer">{result.answer}</p>
                    </div>
                ))}
            </div>
            <button className="results-button" onClick={() => window.location.reload()}>
                Restart Questionnaire
            </button>
        </div>
    );
};

export default Results;
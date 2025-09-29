import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './pages/Welcome';
import Questions from './pages/Questions';
import Results from './pages/Results';
import './styles/main.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/responsive.css';

// Sample questions data
const questions = [
  {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    question: "How often do you exercise?",
    options: ["Daily", "Weekly", "Monthly", "Never"]
  },
  {
    question: "What is your preferred programming language?",
    options: ["JavaScript", "Python", "Java", "C++"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'welcome',
      currentQuestionIndex: 0,
      answers: []
    };
  }

  handleStart = () => {
    this.setState({ currentPage: 'questions' });
  };

  handleAnswerSelected = (answer) => {
    const newAnswers = [...this.state.answers, answer];
    const nextIndex = this.state.currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      this.setState({
        answers: newAnswers,
        currentQuestionIndex: nextIndex
      });
    } else {
      this.setState({
        answers: newAnswers,
        currentPage: 'results'
      });
    }
  };

  render() {
    const { currentPage, currentQuestionIndex, answers } = this.state;

    switch (currentPage) {
      case 'welcome':
        return <Welcome onStart={this.handleStart} />;
      case 'questions':
        return (
          <Questions
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSelected={this.handleAnswerSelected}
          />
        );
      case 'results':
        return <Results answers={answers} questions={questions} />;
      default:
        return <Welcome onStart={this.handleStart} />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

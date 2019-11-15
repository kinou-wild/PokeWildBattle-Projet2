import React from 'react';
import QuizData from './QuizData'
import './Quiz.css'
import {Link} from 'react-router-dom'
import Particle from '../../Particle';


class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 0,
      disabled: true,
      isEnd: false
    };
  }
  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: QuizData[this.state.currentQuestion].question,
        answer: QuizData[this.state.currentQuestion].answer,
        options: QuizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      })
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
    console.log(this.state.currentQuestion);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: QuizData[this.state.currentQuestion].question,
          options: QuizData[this.state.currentQuestion].options,
          answer: QuizData[this.state.currentQuestion].answer
        }
      })
    }
  }

  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false })
  }

  finishHandler =() => {
    //console.log(this.state.currentQuestion)
    if (this.state.currentQuestion === QuizData.length - 1) {
      this.setState({
        isEnd: true
      })
    }
  }

  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    //end page of Quizz

    if (isEnd) {
      return (
        <div>
          <Particle />
        <div className="quizcontainer result">
          <div className='result'>
            <h3 className='quizh1 nes-container is-rounded'>Your Final score is {this.state.score} points </h3>
            <p className='quizp nes-container'>
            The correct answers for the questions were
            </p>
          </div>
          <div>
            <ul>
              {QuizData.map((item, index) => (
                <li className='answer nes-container is-rounded options' key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
          <Link to='/quiz'>
          <button >
            Back to Quiz Selection
          </button>
          </Link>
        </div>
        </div>
      );
    } else {
      return (
        <div>
          <Particle />
        <div className="quizcontainer">
          <div className='containerh1span'>
          <h1 className='quizh1 nes-container is-rounded'>{this.state.questions} </h1>
          <span className='quizspan' >{`Questions ${currentQuestion}  out of ${QuizData.length -
            1} remaining `}
          </span>
          </div>
          {options.map(option => (
            <p
              key={option.id}
              className={`answer nes-container is-rounded options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < QuizData.length - 1 && (
            <button
              className="nes-btn quizbtn"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === QuizData.length - 1 && (
            <button className="nes-btn" onClick={this.finishHandler}>
              Result
            </button>
          )}
        </div>
        </div>
      );
    }
  }
}

export default Quiz;


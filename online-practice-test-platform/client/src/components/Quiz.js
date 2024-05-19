import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('/api/quiz/questions');
        setQuestions(res.data.questions);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers({ ...userAnswers, [name]: value });
  };

  const handleSubmitQuiz = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/quiz', { score: calculateScore() });
      console.log(res.data.message);
      setShowResult(true);
    } catch (err) {
      console.error(err);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.options[userAnswers[`question${index}`]].isCorrect) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {showResult ? (
        <div>
          <h3>Quiz Result:</h3>
          <p>Your score: {calculateScore()}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmitQuiz}>
          {questions.map((question, index) => (
            <div key={index}>
              <h3>Question {index + 1}</h3>
              <p>{question.text}</p>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`option${optionIndex}`}
                    name={`question${index}`}
                    value={optionIndex}
                    onChange={handleAnswerChange}
                    required
                  />
                  <label htmlFor={`option${optionIndex}`}>{option.text}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit Quiz</button>
        </form>
      )}
    </div>
  );
};

export default Quiz;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/quiz/results', {
          headers: {
            'x-auth-token': token,
          },
        });
        setQuizzes(res.data.quizzes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="result-container">
      <h2>Quiz Results</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            Score: {quiz.score} - Taken At: {new Date(quiz.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;


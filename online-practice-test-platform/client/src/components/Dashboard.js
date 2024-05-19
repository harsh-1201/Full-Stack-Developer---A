import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/dashboard', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUser(res.data.user);
        setQuizzes(res.data.quizzes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Dashboard</h2>
      {user && (
        <div>
          <h3>User Information:</h3>
          <p>Email: {user.email}</p>
          <p>Registered At: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      )}
      <h3>Quizzes:</h3>
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

export default Dashboard;


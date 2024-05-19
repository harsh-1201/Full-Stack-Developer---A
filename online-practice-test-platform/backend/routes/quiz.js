// backend/routes/quiz.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

// Submit quiz results
router.post('/', auth, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new Quiz({
      userId: req.user.id,
      score,
    });

    await quiz.save();
    res.json({ message: 'Quiz submitted successfully', quiz });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Fetch quiz results
router.get('/results', auth, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ userId: req.user.id });
    res.json({ quizzes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Fetch quiz questions (example implementation)
router.get('/questions', auth, async (req, res) => {
  try {
    const questions = await Question.find();
    res.json({ questions });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;


// backend/routes/dashboard.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Quiz = require('../models/Quiz');

// Get user dashboard data
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const quizzes = await Quiz.find({ userId: req.user.id });

    res.json({ user, quizzes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;


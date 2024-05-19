const mongoose = require('mongoose');
const QuizSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  score: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Quiz', QuizSchema);


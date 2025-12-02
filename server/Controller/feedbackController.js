// controllers/feedbackController.js
const Feedback = require("../models/feedbackmodule");

// POST - Submit Feedback
const submitFeedback = async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (!name || rating === undefined || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newFeedback = new Feedback({ name, rating, message });
    await newFeedback.save();

    res.status(201).json({ success: true, message: "Feedback saved to database." });
  } catch (error) {
    console.error("Error saving feedback:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// GET - Fetch All Feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 }); // latest first
    res.status(200).json({ success: true, feedbacks });
  } catch (error) {
    console.error("Error fetching feedbacks:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

module.exports = { submitFeedback, getAllFeedback };

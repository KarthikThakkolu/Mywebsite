// routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const { submitFeedback, getAllFeedback } = require("../Controller/feedbackController");

router.post("/feedback", submitFeedback);
router.get("/feedback", getAllFeedback);

module.exports = router;

const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middleware/auth");
const {
  CREATE_QUESTION,
  GET_ALL_QUESTIONS,
  DELETE_QUESTION_BY_ID, 
} = require("../controllers/question");

router.post("/question", CREATE_QUESTION);
router.get("/questions", GET_ALL_QUESTIONS);
router.delete("/question/:id",  DELETE_QUESTION_BY_ID);

module.exports = router;
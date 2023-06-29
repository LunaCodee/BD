const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middleware/auth");
const {
  CREATE_ANSWER,
  LIKE_ANSWER,
  DISLIKE_ANSWER,
//   GET_ALL_QUESTION_ANSWERS,
//   DELETE_ANSWER_BY_ID, 
} = require("../controllers/answer");

router.post("/question/:id/answers", CREATE_ANSWER);
router.post("/answers/:id/like", LIKE_ANSWER);
router.post("/answers/:id/dislike", DISLIKE_ANSWER);
// router.get("/question/:id/answers", GET_ALL_QUESTION_ANSWERS);
// router.delete("/answer/:id",  DELETE_ANSWER_BY_ID);

module.exports = router;
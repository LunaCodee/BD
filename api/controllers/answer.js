const AnswerModel = require("../models/answerModel");
const QuestionModel = require("../models/questionModel");
const uniqid = require("uniqid");

module.exports.CREATE_ANSWER = async (req, res) => {
  try {

    const questionId = req.params.id;
    const answerText = req.body.answer_text;

    const question = await QuestionModel.findById(questionId);
    if (!question) {
      return res.status(404).json({ response: "Question not found" });
    }

    const answer = new AnswerModel({
        id: uniqid(),
        answer_text: answerText,
        gained_likes_number: 0,
    });
 
    question.answers_ids.push(answer.id);

    await answer.save();
    await question.save();

    return res.status(201).json({ response: "Answer was created" });
  } catch (error) {
    console.log("err", error);
    return res.status(500).json({ response: "ERROR" });
  }
};

module.exports.CREATE_ANSWER = async (req, res) => {
    try {
      const questionId = req.params.id;
      const answerText = req.body.answer_text;
  
      const question = await QuestionModel.findById(questionId);
      if (!question) {
        return res.status(404).json({ response: "Question not found" });
      }
  
      const answer = new AnswerModel({
        id: uniqid(),
        answer_text: answerText,
        gained_likes_number: 0,
      });
  
      question.answers_ids.push(answer.id);
  
      await answer.save();
      await question.save();
  
      return res.status(201).json({ response: "Answer was created" });
    } catch (error) {
      console.log("err", error);
      return res.status(500).json({ response: "ERROR" });
    }
  };
  
  module.exports.LIKE_ANSWER = async (req, res) => {
    try {
      const answerId = req.params.id;
  
      const answer = await AnswerModel.findById(answerId);
      if (!answer) {
        return res.status(404).json({ response: "Answer not found" });
      }
  
      answer.gained_likes_number += 1;
  
      await answer.save();
  
      return res.status(200).json({ response: "Answer was liked" });
    } catch (error) {
      console.log("err", error);
      return res.status(500).json({ response: "ERROR" });
    }
  };
  
  module.exports.DISLIKE_ANSWER = async (req, res) => {
    try {
      const answerId = req.params.id;
  
      const answer = await AnswerModel.findById(answerId);
      if (!answer) {
        return res.status(404).json({ response: "Answer not found" });
      }
  
      answer.gained_likes_number -= 1;
  
      await answer.save();
  
      return res.status(200).json({ response: "Answer was disliked" });
    } catch (error) {
      console.log("err", error);
      return res.status(500).json({ response: "ERROR" });
    }
  };

  module.exports.GET_ALL_QUESTION_ANSWERS = async (req, res) => {
    try {
      const { id } = req.params;
  
      const question = await QuestionModel.findById(id);
      if (!question) {
        return res.status(404).json({ response: "Question not found" });
      }
  
      const answerIds = question.answers_ids;
      const answers = await AnswerModel.find({ id: { $in: answerIds } });
  
      return res.status(200).json({ response: answers });
    } catch (error) {
      console.log("err", error);
      return res.status(500).json({ response: "ERROR" });
    }
  };

module.exports.DELETE_ANSWER_BY_ID = async (req, res) => {
  try {
    const { id } = req.params;

    const answer = await AnswerModel.findByIdAndDelete(id);
    if (!answer) {
      return res.status(404).json({ response: "Answer not found" });
    }

    await QuestionModel.updateOne({}, { $pull: { answers_ids: answer.id } });

    return res.status(200).json({ response: "Answer was deleted" });
  } catch (error) {
    console.log("err", error);
    return res.status(500).json({ response: "ERROR" });
  }
};
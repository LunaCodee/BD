const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    id: { type: String, required: true, minlength: 3 },
    answer_text: { type: String, required: true },
    gained_likes_number: { type: Number, required: true },
});

module.exports = mongoose.model("Answer", answerSchema);

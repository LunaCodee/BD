const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: { type: String, required: true, minlength: 3 },
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 8 },
    password: { type: String, required: true, minlength: 6 },
});

module.exports = mongoose.model("User", userSchema);


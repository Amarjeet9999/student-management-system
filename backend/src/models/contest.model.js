const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  time: { type: String, required: true },
  deadline: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

module.exports = mongoose.model("contest", contestSchema);

const mongoose = require("mongoose");

module.exports = () => {
  console.log("Mongo DB Connected");
  return mongoose.connect(
    `mongodb+srv://amarjeet:12345@cluster0.6mdkw.mongodb.net/studentManagementSystem?retryWrites=true&w=majority`
  );
};

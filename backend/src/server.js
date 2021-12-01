const express = require("express");
const app = express();
const connect = require("./config/db");
app.use(express.json());

const { register, login, stLogin } = require("./controllers/admin.controller");
const studentController = require("./controllers/student.controller");

app.use("/login", login);
app.use("/stlogin", stLogin);
app.use("/register", register);
app.use("/student", studentController);

module.exports = async () => {
  try {
    await connect();
    app.listen(5000, () => {
      console.log(`Listening on PORT 5000`);
    });
  } catch (err) {
    console.log(err);
  }
};

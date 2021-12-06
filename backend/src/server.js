const express = require("express");
const app = express();
const connect = require("./config/db");
app.use(express.json());
const cors = require("cors");

const { register, login, stLogin } = require("./controllers/admin.controller");
const studentController = require("./controllers/student.controller");
const contestController = require("./controllers/contest.controller");

app.use(cors());

app.use("/login", login);
app.use("/stlogin", stLogin);
app.use("/register", register);
app.use("/student", studentController);
app.use("/contest", contestController);

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

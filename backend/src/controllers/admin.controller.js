const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const Admin = require("../models/admin.model");
const Student = require("../models/student.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

// Registeration
const register = async (req, res) => {
  try {
    let user = await Admin.findOne({
      email: req.body.email,
    }).exec();

    // If user already exist

    if (user)
      return res.status(400).json({
        status: "error",
        message: "User already exist",
      });

    // otherwise create a user and then hash the password with pre method in schema

    user = await Admin.create(req.body);

    // Create a token

    const token = newToken(user);
    // req.headers.auth = token;
    // Then we need to return the token and the user information in the frontend

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

// Logging In
const login = async (req, res) => {
  try {
    // first check if a user with that email already exist
    let user = await Admin.findOne({
      email: req.body.email,
    }).exec();

    // if not user than throw an error
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User does not exist" });
    }

    // if user than match the user
    const match = user.checkPassword(req.body.password);
    // if not matches than throw the error

    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "Email or password is Incorrect",
      });
    }

    // if match than create the token
    const token = newToken(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const stLogin = async (req, res) => {
  try {
    // first check if a user with that email already exist
    let student = await Student.findOne({
      email: req.body.email,
    }).exec();

    // if not student than throw an error
    if (!student) {
      return res
        .status(400)
        .json({ status: "error", message: "User does not exist" });
    }

    // if user than match the user
    const match = student.checkPassword(req.body.password);
    // if not matches than throw the error

    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "Email or password is Incorrect",
      });
    }

    // if match than create the token
    const token = newToken(student);

    return res.status(201).json({ student, token });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

module.exports = { register, login, stLogin };

const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

// Post
router.post("/", async (req, res) => {
  try {
    let user = await Student.findOne({ email: req.body.email });
    console.log(user);
    if (user)
      return res.status(400).json({
        status: "error",
        message: "User already exist",
      });
    user = await Student.create(req.body);
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    let user = await Student.find({}).lean().exec();
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let user = await Student.findByIdAndDelete(req.params.id);
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;

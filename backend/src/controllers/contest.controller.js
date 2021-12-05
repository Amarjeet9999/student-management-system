const express = require("express");
const router = express.Router();

const Contest = require("../models/contest.model");

// Get Method
router.get("/", async (req, res) => {
  try {
    let contest = await Contest.find({}).lean().exec();
    return res.status(201).json({ data: contest });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});


// Post Method
router.post("/", async (req, res) => {
  try {
    let contest = await Contest.create(req.body);
    return res.status(201).json({ data: contest });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: String, required: true },
    education: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    roles: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Storing hashed password in DB
studentSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

studentSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("student", studentSchema);

const mongoose = require('mongoose');

// User schema and model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

module.exports = mongoose.model["User", userSchema];
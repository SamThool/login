const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email:{
    type: String,
    required:true
  },
  pass:{
    type: String,
    required:true
  }
});

const login = new mongoose.model("Login", schema);

module.exports = login;

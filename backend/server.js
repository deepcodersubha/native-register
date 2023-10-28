const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Subhadeep790:munai2000@mycluster.qowbluh.mongodb.net/mYusers");


app.post("/register", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  userModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json(`success. Hello ${name}!`);
      } else {
        res.json("login failed");
      }
    } else {
      res.json("no such users");
    }
  });
});

app.listen(5500, () => {
  console.log("server listening on 5500");
});

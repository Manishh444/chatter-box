const express = require("express");
const { chats } = require("./data/data");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Chatter-box");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.listen(5000, console.log("Server at 5000"));

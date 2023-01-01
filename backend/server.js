const express = require("express");
const { chats } = require("./data/data");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Chatter-box");
});
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
    console.log(req.params.id)
});
app.listen(5000, console.log("Server at 5000"));

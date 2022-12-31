const express  = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send("Welcome to Chatter-box")
})

app.listen(5000, console.log("Server at 5000"))
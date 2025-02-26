const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from Server!!")
})
app.use("/hello", (req, res) => {
    res.send("Hello ")
})

app.listen(5555, () => {
    console.log("Server Listening on port 5555");
    
})
const express = require("express");

const app = express();

//Get API call
app.get("/user", (req, res) => {
    console.log(req.query);     //Read the query (/user?userid=101&status=Done)
    console.log(req.params);    //Read the params (/user/:userID)
    res.send({ fName: "Shubham", lname: "Ambhore"})
})

//Post API call
app.post("/user", (req, res) => { 
    res.send("Data successfully saved!")
})

// Delete API Call
app.delete("/user", (req, res) => { 
    res.send("Data successfully Deleted!")
})  

app.listen(5555, () => {
    console.log("Server Listening on port 5555"); 
})
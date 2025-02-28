const express = require("express");
const connectDB = require("./config/database")
const { adminAuth, userAuth } = require("./middlewares/auth")
const app = express(); 
const User = require("./models/user") 

app.post('/signup', async (req, res) => {  
    console.log('signup API');
    
    const user = new User({
        firstName: "Shubham",
        lastName: "Ambhore",
        emailId: "shu@gmail.com",
        password: "shubham@123"
    } )
    try{
        await user.save()
        res.send("User added successfully!")
    } catch(err){
        res.status(400).send("Error while saving user:", err.message)
    }
})

connectDB()
    .then(() => {
        console.log("Database connection established...");


        // //Admin auth
        // app.use("/admin", adminAuth)

        // //get all data from admin
        // app.get("/admin/getAllData", (req, res) => {
        //     console.log('/admin/getAllData called');
        //     res.send("response received!!")
        // }) 

        // //get all data from User
        // app.get("/user/allData", userAuth, (req, res) => {
        //     console.log('/user/allData called');
        //     throw new Error('sdfsd')
        //     res.send("User Data send!!")
        // })

        // // middleware for error handling
        // app.use("/", (err, req, res, next) => {
        //     // log error
        //     if(err){
        //         res.status(500).send("Something went wrong.")
        //     }
        // })

        //server listening on port 5555
        app.listen(5555, () => {
            console.log("Server Listening on port 5555");
        })
    })
    .catch((error) => {
        console.log("Database connot be connected!!");
    })

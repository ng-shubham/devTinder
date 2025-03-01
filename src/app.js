const express = require("express");
const connectDB = require("./config/database")
const { adminAuth, userAuth } = require("./middlewares/auth")
const app = express(); 
const User = require("./models/user") 

app.use(express.json());

// Signup API call
app.post('/signup', async (req, res) => {  
    console.log('signup API');
     const user = new User(req.body)
    try{
        await user.save()
        res.send("User added successfully!")
    } catch(err){
        res.status(400).send("Error while saving user:", err.message)
    }
})

//Get data by email id
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;    
    try{
        const users = await User.find({emailId: userEmail})
        if(users.length === 0){
            res.status(404).send("User not found")
        }else {
            res.send(users)
        } 
    }catch(err) {
        res.status(400).send("Something went wrong")
    }
})

//Get all data from database
app.get("/feed", async (req, res) => {
    try{
        const users = await User.find({})
        res.send(users)
    }catch(err){
        res.status(404).send("Users not found")
    }
})

//Delete data by user id
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("User successfully Deleted!")
    }catch(err){
        res.status(400).send("User not found!!")
    }
})

// Update data by user id
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate(userId, data);
        res.send("User updated Successfully")
    }catch(err){
        res.status(400).send("User Not found");
    }
})

//Get one object bt email id
// app.get("/user", async (req, res) => { 
//     try{
//         const user = await  User.findOne({ emailId: req.body.emailId })
//         res.send(user)
//     }catch(err){
//         res.status(404).send("User not found")
//     }
// })

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

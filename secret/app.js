
const express = require("express");
const BodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:false}));


// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});
// mongoose.connect("mongodb://127.0.0.1:27017/userDB")


mongoose.connect("mongodb://localhost:27017/usersDB")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
// userSchema.plugin(encrypt,{ secret: process.env.SECRET, encryptedFields: ["password"]});

const users = new mongoose.model("users",userSchema);

app.get("/login",function(request,response){
    response.render("login");
});
app.get("/",function(request,response){
    response.render("home");
});

app.get("/register",function(request,response){
    response.render("register");
});

// this is now the backend for post on login and signup page



app.post("/register",async(request,response)=>{
    const newUser = new users({
        email: request.body.username,
        password: md5(request.body.password)
    });
    // newUser.save();
    // response.render("secrets");   
    const checking = await users.findOne({ email: request.body.username });

    try{
        if (checking.email === request.body.username) {
            response.send("user details already exists");
        }
       }

       finally{
            newUser.save();
            response.render('secrets');
       }
        
    });

app.post("/login",async(request,response)=>{

    try{
        console.log("trying");
        const checking = await users.findOne({ email: request.body.username });
        if(checking.email === request.body.username){
            console.log("found it");
            if(md5(request.body.password) === checking.password){
                console.log("found it twice");
                response.render('secrets');
            }
            else{ 
                response.status(400).json({ error: "password doesn't match" }); 
            } 
        }else{ 
            response.status(400).json({ error: "User doesn't exist" }); 
        } 
        } 
        catch (error) { 
            response.status(400).json({ error }); 
            } 
            
});

app.listen(3000, function(){
    console.log("server started at the port 3000");
});



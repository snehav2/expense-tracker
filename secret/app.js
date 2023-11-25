 
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


// We are creating a Database UsersDB
mongoose.connect("mongodb://localhost:27017/LoginInfo")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})
//this is the creation of a Document
const userSchema = new mongoose.Schema({
    name:String,
    phno: Number,
    age:Number,
    email: String,
    password: String
});
// userSchema.plugin(encrypt,{ secret: process.env.SECRET, encryptedFields: ["password"]});
const users = new mongoose.model("users",userSchema);




//this is the creation of a Document for Daily/Monthlyexpenses
// const expenseschema= new mongoose.Schema({

//     date:    Date,
//     cateogary : String,
//     frequency : String,
// });
const expenseschema = new mongoose.Schema({
    cateogary: String,
    dropdown2: String,
    date: Date,
    number : Number
  });
// userSchema.plugin(encrypt,{ secret: process.env.SECRET, encryptedFields: ["password"]});
const expense = new mongoose.model("expense",expenseschema);

// const formDataSchema = new mongoose.Schema({
//     dropdown1: String,
//     dropdown2: String,
//     date: Date,
//     number:Number
//   });
  
// const FormData = mongoose.model('FormData', formDataSchema);



app.get("/login",function(request,response){
    response.render("login");
});
app.get("/",function(request,response){
    response.render("home");
});

app.get("/register",function(request,response){
    response.render("register");
    response.redirect('/secrets');
});
// app.get("/secrets",function(request,response){
//     response.render("split");
// });

app.post("/secrets", async(request,response)=>{
    const userexpense = new expense({
    number : request.body.number,
    date:    request.body.date,
    cateogary:  request.body.dropdown1,
    dropdown2:  request.body.dropdown2,
    });
    try{
        await userexpense.save();
       return  response.render("submitted");
    }
    catch(error){
        return response.status(500).send("error");
    }
});

app.post('/split',async(request,response)=>{
    return response.render("split");
})
// app.post('/secrets', async (req, res) => {
//     const { dropdown1, dropdown2, date, number } = req.body;
  
//     // Create a new FormData document
//     const formData = new FormData({
//       dropdown1,
//       dropdown2,
//       date,
//       number
//     });
//     try {
//       // Save the form data to MongoDB
//       await formData.save();
  
//       // You can send a response back to the user
//       res.send('Form submitted successfully!');
//     } catch (error) {
//       // Handle errors (e.g., validation errors)
//       res.status(500).send('Error submitting form');
//     }
//   });




// this is now the backend for post on login and signup page
app.post("/register",async(request,response)=>{
    console.log(request.body);
    const newUser = new users({
        name: request.body.name,
        phno: request.body.phno,
        age:  request.body.age,
        email: request.body.email,
        password: md5(request.body.password)
    });
    // newUser.save();
    // response.render("secrets");   
    const checking = await users.findOne({ email: request.body.email });
    console.log(checking);
    if(checking){
        if (checking.email === request.body.email) {
            return response.send("user details already exists");
        }
    }
    else{
        newUser.save();
        console.log("Newuser");
         return response.render('secrets');
    }
        
    });



app.post("/login",async(request,response)=>{
    console.log(request.body);
    try{
        console.log("trying");
        const checking = await users.findOne({ email: request.body.email });
        if(checking.email === request.body.email){
            console.log("found it");
            if(md5(request.body.password) === checking.password){
                console.log("found it twice");
                return response.render('secrets');
            }
            else{ 
                 return response.status(400).json({ error: "password doesn't match" }); 
            } 
        }else{ 
             return response.status(400).json({ error: "User doesn't exist" }); 
        } 
        } 
        catch (error) { 
            console.log(error);
             return response.status(400).json({ error }); 
            } 
            
});
app.listen(8000, function(){
    console.log("server started at the port 3000");
    console.log("server started");
});



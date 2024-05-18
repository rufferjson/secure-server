const express =require("express")
const app = express()
const jwt = require('jsonwebtoken');
const dotenv =require("dotenv").config()
const mongoose = require("mongoose")
const userroute = require('./routes/UserRoutes')
// const bodyParser = require("body-parser")

const PORT=4566;



// middleware 
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Accept, Access-Control-Request-Headers, Authorization"
    );
    //and remove cacheing so we get the most recent comments
    res.setHeader("Cache-Control", "no-cache");
    next();
});



app.get('/',(req,res)=>{
    console.log(req);
    res.send('server home page')
})

app.post('/',(req,res)=>{
    console.log(req);
    res.send('server home page')
})


app.use(userroute);



mongoose.connect
(process.env.STMS_DB)
  
app.listen(PORT,()=>{
    console.log(`server is now running ${PORT}` );
})
  

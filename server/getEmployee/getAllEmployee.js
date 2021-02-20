//import mongodb module
//require is the function for any module importing
let mongodb=require("mongodb");
//create client
let getEmployeemongoclient=mongodb.MongoClient;
// import express module
let employees=require("express").Router().get("/",(req,res)=>{
    getEmployeemongoclient.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
        if(err) throw err;
        else{
        db.collection("employees").find().toArray((err,array)=>{
              if (err) throw err;
              else{
                  res.send(array);
              }
        })
    }
    })

});

//export the employees module
module.exports=employees 
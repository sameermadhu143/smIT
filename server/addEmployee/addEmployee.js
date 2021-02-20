//import mongodb
const {responce}=require ("express");
let mongodb=require ("mongodb");
const employees = require("../getEmployee/getAllEmployee");
let addmongoclient=mongodb.MongoClient
//import express 
let addEmployee=require("express").Router().post("/",(req,res)=>{
       let newrecord={
           "Name":req.body.Name,
           "Age":req.body.Age,
            "EmpId":req.body.EmpId,
            "Salary":req.body.Salary,
            "DOB":req.body.DOB
       }
       addmongoclient.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
           if(error) throw err
           else{
               db.collection("employees").insertOne(newrecord,(err,result)=>{
                    if(err) throw err
                    else{
                            res.send({insert:"success"})
                    }
               })
           }
       }); 
})
//addEmployee module declare globally
module.exports=addEmployee
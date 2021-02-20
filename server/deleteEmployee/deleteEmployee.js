//import mongodb
let mongodb=require("mongodb");
let sambait=mongodb.mongoclient;
let deleteEmployees=require("express").Router().delete("/",(req,res)=>{
let sambait=mongodb.mongoclient;
sambait.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
                 if(err) throw err
                 else{
                     db.collection("employees").deleteOne({"EmpId":req.body.EmpId},(err,result)=>{
                         res.send({"delete":"success"})
                     });
                 }
       });
});
module.exports=deleteEmployees;
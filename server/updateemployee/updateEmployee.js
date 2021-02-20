//import mongodb
let mongodb=require("mongodb");
let sambaIt=mongodb.mongoclient;
// 
let updateEmployee=require("express").Router().put("/",(req,res)=>{
     let basedonId={"EmpId":req.body.EmpId};
     let newProperties={$set:{"Name":req.body.Name,
                              "Age":req.body.Age,
                              "EmpId":req.body.EmpId,
                               "Salary" :req.body.Salary,
                            "DOB":req.body.DOB     }
    }
    sambaIt.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
      if(err) throw err;
      else{
          db.collection("employees").updateOne(basedonId,newProperties,(err,result)=>{
              if(err) throw err
              else{
                  res.send({update:"success"});
              }
          })
      }
    })
  
})
module.exports=updateEmployee
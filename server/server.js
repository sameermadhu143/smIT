//import express module for collaborate the costum module
let express=require("express")

//create the master object
let app=express();


//import body parser module
//bodyparser module rcv data from client
let bodyparser=require ("body-parser")
app.use(bodyparser.json());
//decoding data using false
app.use(bodyparser.urlencoded({extended:false}));
//enable the port communication
//import cors module
let cors=require("cors");
app.use (cors());


//use getEmployee module
  app.use("/fetch",require("./getEmployee/getAllEmployee"));
// // // //use addEmployeemodule
// app.use("/insert",require("./addEmployee/addEmployee"));
// // // //use update module
//  app.use("/update",require("./updateemployee/updateEmployee"));
// // // //use delete module  
// app.use("/delete",require("./deleteEmployee/deleteEmployee"));
 
//assign port number
app.listen(8080)
console.log("serven listning succesfully 8087")

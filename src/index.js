const express= require("express");
const connect =require("./configs/db")
const app = express();
app.use(express.json());






app.listen(9999,async()=>{
    try {
         await connect();
         console.log("Listening the port number 9999");
    } catch (error) {
        console.log(error.message)
    }
})
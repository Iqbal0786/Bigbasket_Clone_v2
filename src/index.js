const express= require("express");
const connect =require("./configs/db")
const productController=require("./controllers/product.controller")
const { body, validationResult } = require("express-validator");
const { register, login } = require("./controllers/auth.controller");
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products",productController);


app.post("/register", register)
app.post("/login", login)





app.listen(9999,async()=>{
    try {
         await connect();
         console.log("Listening the port number 9999");
    } catch (error) {
        console.log(error.message)
    }
})
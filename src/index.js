const express= require("express");
const connect =require("./configs/db")
const productController=require("./controllers/product.controller")
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products",productController);







app.listen(9999,async()=>{
    try {
         await connect();
         console.log("Listening the port number 9999");
    } catch (error) {
        console.log(error.message)
    }
})
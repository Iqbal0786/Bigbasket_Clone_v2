const express=require("express");
const router=express.Router();
const Product=require("../models/product.model")


router.get("",async(req,res)=>{
    try{
        const products=await Product.find().lean().exec();
        return res.status(200).send(products); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        return res.status(201).send(product); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});


module.exports=router;
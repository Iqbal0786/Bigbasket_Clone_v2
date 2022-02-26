const express=require("express");
const router=express.Router();
const Product=require("../models/product.model")


router.get("",async(req,res)=>{
    try{
        let products;
        if(req.query.s){
            // searching query using regex 
            let search= new RegExp(req.query.s,"i");
            products=await Product.find({name:search}).lean().exec();
            return res.status(200).send(products); 
        }
     const page = +(req.query.page) || 1;
     const size = +(req.query.limit) || 20;
     const offset = (page - 1)*size;
     const totalPages = Math.ceil((await Product.find({}).countDocuments().lean().exec()/size));

     products=await Product.find().skip(offset).limit(size).lean().exec();
        return res.status(200).send({data:{products,totalPages}}); 

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

router.patch("/:id", async (req, res) => {
    try {
      const product = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const product = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      res.send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


module.exports=router;
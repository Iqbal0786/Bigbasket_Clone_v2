const mongoose = require("mongoose");
const productSchema= new mongoose.Schema({
    name:{type:String,required:true},
    off:{type:String,required:true},
    image_url:{type:String,required:true},
    mrp:{type:Number,required:true},
    mrp2:{type:Number,required:true},
},{
    timestamps:true,
    versionKey:false
});

module.exports=mongoose.model("product",productSchema);
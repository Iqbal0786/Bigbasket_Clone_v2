require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user)=>{
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
};

const register = async(res, req)=>{
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec();
        
        if(user) return res.status(400).send({message: "Please try with another email"});

        user = await User.create(req.body);

        const token = newToken(user);   

        res.send({user, token});
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const login = async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});

        if(!user) return res.status(400).send({message: "Please try another Email or Password"});

        const match = User.checkPassword(req.body.password);

        if(!match) return res.status(400).send({message: "Please try another Email or Password"});

        const token = newToken(user);

        res.send({user, token});
    }
    catch(e){
        res.status(500).send(e.message);
    }
};

module.exports = {register, login, newToken};
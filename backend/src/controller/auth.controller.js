require("dotenv").config();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let newErrors;
            newErrors = errors.array().map((err) => {
                console.log("err", err);
                return { key: err.param, message: err.msg };
            });
            return res.status(400).send({ errors: newErrors });
        }
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user)
            return res.status(400).send({ message: "Please try another email" });

        user = await User.create(req.body);


        const token = newToken(user);


        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let newErrors;
            newErrors = errors.array().map((err) => {
                console.log("err", err);
                return { key: err.param, message: err.msg };
            });
            return res.status(400).send({ errors: newErrors });
        }
        const user = await User.findOne({ email: req.body.email });

        if (!user)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const match = user.checkPassword(req.body.password);

        if (!match)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const token = newToken(user);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports = { register, login };
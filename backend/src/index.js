const express = require("express");
const connect = require("./confiq/db")
const cors = require("cors")
const { body, validationResult } = require("express-validator");
const { register, login } = require("./controller/auth.controller");


const app = express();

app.use(express.json());

app.use(cors())

app.post("/register", body("name").isAlpha().isString().isLength({ min: 3 }).withMessage("first name is required and minum length should be 3"),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }).withMessage("password is required and length should be 6"), register)
app.post("/login", body("email").isEmail(),
    body("password").isLength({ min: 6 }).withMessage("password is required and length should be 6"), login)


app.listen(7000, async () => {
    await connect();
    console.log('listening on port 7000');
})
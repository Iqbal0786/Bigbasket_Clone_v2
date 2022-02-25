const express= require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const {register, login, newToken} = require("./controllers/auth.controller");

const passport = require("./configs/google-oauth");

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/users", userController);

passport.serializeUser(function (user, done){
    done(null, user);
});

passport.deserializeUser(function (user, done){
    done(null, user);
});

app.get("/auth/google", passport.authenticate("google", {scope: ["email", "profile"]})
);

app.get("/auth/google/callback", passport.authenticate("google",{
    failureRedirect: "/auth/google/failure",
}),
(req, res)=>{
    const {user} = req;
    const token = newToken(user);

    return res.send({user, token});
}
);

app.listen(5500, async ()=>{
    try{
        await connect();
    }
    catch(e){
        console.log(e.message);
    }
    console.log("Listening on port 5500");
});
require("dotenv").config();
const passport= require("passport");
const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User= require("../models/user.model");
const { v4 : uuidv4} = require("uuid")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env. GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9999/auth/google/callback",
    passReqToCallback   : true
  },
   async function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    let user;
     user= await User.findOne({email:profile?.email}).lean().exec();
    if(!user){
      user= await User.create({
        name: profile?._json?.name,
        email:profile?.email,
        password:uuidv4()
      })
    }
    return done(null,user)
  }
));

module.exports=passport;
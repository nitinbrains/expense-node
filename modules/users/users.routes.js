const express=require('express');
const userRoutes = express.Router();
const register=require('./controllers/register');

//routes

userRoutes.post("/register",register);


module.exports=userRoutes;
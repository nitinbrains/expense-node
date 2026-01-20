const express=require('express');
const userRoutes = express.Router();
const register=require('./controllers/register');
const login=require('./controllers/login');
const userDashboard=require('./controllers/userDashboard');
const auth = require('../../middleware/auth');

//routes

userRoutes.post("/register",register);
userRoutes.post("/login",login);

userRoutes.use(auth)

//protected routes
userRoutes.get("/dashboard", userDashboard);

module.exports=userRoutes;
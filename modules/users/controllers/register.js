const mongoose=require('mongoose');
const bcrypt = require('bcrypt');

const jsonwebtoken = require('jsonwebtoken');
const jwtManager = require('../../../managers/jwtManager');

const register = async (req,res)=>{
    const usersModel=mongoose.model("users");
    const {name,email,password,balance,confirm_password}=req.body;

    //Validations
  

    if(password!==confirm_password){
        throw new Error("Password and Confirm Password do not match");
    }
    if(password.length<6){
        throw new Error("Password must be at least 6 characters long");
    }
    if(!password){
        throw new Error("Password is required");
    }
    if(!email){
        throw new Error("Email is required");
    }   
    if(!name){
        throw new Error("Name is required");
    }
      const getDuplicateEmail = await usersModel.findOne({email:email});
    if(getDuplicateEmail){
        throw new Error("Email already registered");
    }


    const hashedPassword= await bcrypt.hash(password,12);

    const createdUser=await usersModel.create({
        name,
        email,
        password:hashedPassword,
        balance
    });

      const accessToken = jwtManager(createdUser);



    res.status(200).json({
        status: "success",
        message: "User registered successfully",
        accessToken: accessToken
    });
}

module.exports = register;
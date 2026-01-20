const express=require('express');
const transationRoutes = express.Router();

const auth = require('../../middleware/auth');
const addIncome = require('./controllers/addIncome');
const addExpense = require('./controllers/addExpense');
const getTransactions = require('./controllers/getTransactions');

//routes

transationRoutes.use(auth)

//protected routes

transationRoutes.post("/addIncome",addIncome)
transationRoutes.post("/addExpense",addExpense)
transationRoutes.get("/getTransactions",getTransactions)


module.exports=transationRoutes;
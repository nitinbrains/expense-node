const mongoose = require('mongoose');

const addExpense = async(req,res)=>{
    const usersModel=mongoose.model("users");
    const transactionModel=mongoose.model("transactions");

    const {amount,remarks}=req.body;

    if(!amount) throw "Amount is required";
    if(!remarks) throw "Remarks is required";

    if(amount<=0) throw "Amount should be greater than zero";

    await transactionModel.create({
        userId: req.user.id,
        transactionType: "expense",
        amount,
        remarks
    });

    await usersModel.updateOne(
        {_id: req.user.id},
        {$inc: {balance: amount * -1}}, // Decrease balance for expense
        {runValidators: true}
    );


    res.status(200).json({
        status: "success",
        message: "Expense added successfully"
    });
}

module.exports =  addExpense;
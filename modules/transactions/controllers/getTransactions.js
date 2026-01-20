const mongoose=require("mongoose")

const getTransactions=async(req,res)=>{
    const transactionModel=mongoose.model("transactions");

    const transactions=await transactionModel.find({userId: req.user.id, ...req.query}).sort({createdAt: -1}); //req.query could be transactionType=income or expense

    res.status(200).json({
        status: "success",
        message: "Transactions fetched successfully",
        data: transactions
    });
}

module.exports = getTransactions;
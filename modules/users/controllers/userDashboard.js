const mongoose = require('mongoose');

const userDashboard = async (req, res) => {

    const usersModel=mongoose.model("users");
    const transactionModel=mongoose.model("transactions");

    console.log("User Info from JWT:", req.user);

    const getUser = await usersModel.findOne({_id: req.user.id}).select('-password');  // Exclude password field

    const transactions = await transactionModel.find({userId: req.user.id}).sort({createdAt: -1})//.limit(5); // Get latest 5 transactions

    res.status(200).json({
        status: "success",
        message: "User Dashboard",
        data: getUser,
        recentTransactions: transactions
    });
}

module.exports = userDashboard;
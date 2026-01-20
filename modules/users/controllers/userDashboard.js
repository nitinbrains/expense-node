const mongoose = require('mongoose');

const userDashboard = async (req, res) => {

    const usersModel=mongoose.model("users");

    console.log("User Info from JWT:", req.user);

    const getUser = await usersModel.findOne({_id: req.user.id}).select('-password');  // Exclude password field

    res.status(200).json({
        status: "success",
        message: "User Dashboard",
        data: getUser
    });
}

module.exports = userDashboard;
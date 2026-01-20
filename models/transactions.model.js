const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",    
        required: true,
    },
    transactionType: {  // 'income' or 'expense'    
        type: String,
        required: true,
        enum: ['income', 'expense'],
    },
    remarks: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const transactionsModel = mongoose.model("transactions", transactionsSchema);

module.exports = transactionsModel;
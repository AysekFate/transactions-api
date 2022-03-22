const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    title: { type: String,  default: " " },
    outlay: { type: Boolean, default: false },
    costs: { type: Number },
    desc: { type: String, default: " "},
},
    { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema)
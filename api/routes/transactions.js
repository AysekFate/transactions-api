const router = require("express").Router();
const Transaction = require("../models/Transaction");

// Create

router.post("/", async (req, res) => {
    const newTransaction = new Transaction(req.body)
    try {
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (err) {
        res.status(500).json(err)
    }

});
// Update
router.put("/:id", async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }, {
            new: true
        });
        res.status(201).json(updatedTransaction);
    } catch (err) {
        res.status(500).json(err)
    }

});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json("Transaction has been deleted");
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get
router.get("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.status(200).json(transaction);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Get all
router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions.reverse());
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
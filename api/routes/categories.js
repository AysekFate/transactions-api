const router = require("express").Router();
const Categorie = require("../models/Categorie");



// Create

router.post("/", async (req, res) => {
        const newCategorie = new Categorie(req.body)
        try {
            const savedCategorie = await newCategorie.save();
            res.status(201).json(savedCategorie);
        } catch (err) {
            res.status(500).json(err)
        }
    
});
// Update
router.put("/:id", async (req, res) => {
        try {
            const updatedCategorie = await Categorie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                }, {
                new: true
            });
            res.status(201).json(updatedCategorie);
        } catch (err) {
            res.status(500).json(err)
        }
    
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.id);
        res.status(200).json("Categorie has been deleted");
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get
router.get("/:id", async (req, res) => {
    try {
      const categorie = await Categorie.findById(req.params.id);
        res.status(200).json(categorie);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Get all
router.get("/", async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.status(200).json(categories.reverse());
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema({
    title:{type:String, required:true, unique:true},
    desc:{type:String, },
  },  
  { timestamps: true }
);

module.exports = mongoose.model("Categorie", CategorieSchema)
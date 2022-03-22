const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categorieRoute = require("./routes/categories");
const transactionRoute = require("./routes/transactions");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
       
    })
    .then(() => console.log("DB Connection Seccessful!"))
    .catch((err) => console.log(err));

    app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categorieRoute);
app.use("/api/transactions", transactionRoute);


app.listen(8800, () => {
    console.log("Beckend server is running");
});



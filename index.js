const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const postRouters = require("./routes/postRoutes.js");


const app = express();

//middleware
dotenv.config();
app.use(express.json());
app.use(cors());



const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;


//CONNECTION TO MONGODB
mongoose.connect(mongoUrl)
.then(() => {
    console.log("MongoDb connected sucessfully");


    app.use("/posts", postRouters);

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log("connect to MongoDb server failed")
    console.log(error)
})
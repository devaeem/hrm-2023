require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const port = process.env.PORT



app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));






connectDB();


const position = require("./Routes/position")
const users = require("./Routes/user")

//api
app.use('/api/',users)
app.use('/api/',position)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
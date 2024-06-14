const express = require("express")
const app = express()
require("dotenv").config()
const notFound = require("./middleware/not-found")
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())
app.use(notFound)

const PORT = process.env.PORT || 3000

app.get("/api/v1/exercices" , (req,res) => {
    try {
        const exercises = await Exercice.find({})
        res.status(200).json({exercises})
    } catch (error) {
        console.log(error)
    }
})

const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("connected")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , console.log(`Server is listening on port : ${PORT}...`))
    }catch(error){
        console.log("Error!")
    }
}

start()

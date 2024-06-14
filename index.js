const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./db/connect")
const router = require("./routes/route")
const notFound = require("./middleware/not-found")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/api/v1/exercices" , router)
app.use(notFound)

const PORT = 3000

app.get("/" , (req,res) => {
    res.status(200).send("Fitness App")
})


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , console.log(`Server is listening on port : ${PORT}...`))
    }catch(error){
        console.log("Error!")
    }
}

start()
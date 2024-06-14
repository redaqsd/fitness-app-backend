const mongoose = require("mongoose")

const exSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    sets : {
        type : Number,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    video : {
        type : String,
        required : false
    },
    day : {
        type : String,
        required : true
    },
    target : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("Exercice" , exSchema)
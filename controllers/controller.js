const Exercice = require("../model/schema")

const getEx = async(req,res) => {
    try {
        const exercises = await Exercice.find({})
        res.status(200).json({exercises})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getEx}
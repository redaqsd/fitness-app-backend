const express = require("express")
const router = express.Router()
const {getEx} = require("../controllers/controller")


router.get("/" , getEx)


module.exports = router
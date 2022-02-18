const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    console.log("Rendering article")
    res.send("articles")
})

module.exports = router
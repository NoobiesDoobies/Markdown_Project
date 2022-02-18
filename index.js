const express = require("express")
const app = express()
const port = 3000;
const articleRouter = require("./routes/articles")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/blog")

app.use(express.urlencoded({ extended : false}))


// untuk baca html
app.set("view engine", "ejs")
app.set("views", "ejs")



app.get("/", (req, res) =>{
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: "Test description"
    },
    {
        title: "Test Article2",
        createdAt: new Date(),
        description: "Test description2"
    }]
    res.render("articles/index", {articles:articles})
})


app.use("/articles", articleRouter)

app.listen(port, (req, res)=>{
    console.log(`Listening at port ${port}`)
})
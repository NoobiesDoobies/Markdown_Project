const express = require("express")
const app = express()
const port = 3000;
const articleRouter = require("./routes/articles")


// untuk baca html
app.set("view engine", "ejs")
app.set("views", "ejs")



app.get("/", (req, res) =>{
    const articles = [{
        title: "Test Article",
        createdAt: Date.now(),
        description: "Test description"
    }]
    res.render("html", {articles:articles})
})


app.use("/articles", articleRouter)

app.listen(port, (req, res)=>{
    console.log(`Listening at port ${port}`)
})
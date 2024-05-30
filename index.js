const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.set(express.static(path.join(__dirname, "public")))


const posts = [
    {
        username : "Virang",
        content : "Dukh toh ho raha hai!"
    },
    {
        username : "Abhinav",
        content : "Khud se expand kar leta hai yeh bosriwala"
    },
    {
        username : "Uday",
        content : "Barkoooo!"
    }
]

app.get("/posts", (req,res) => {
    res.render("index.ejs")
})


app.listen(PORT, () => console.log(`Server started at ${PORT}`))
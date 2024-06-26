const express = require("express")
const path = require("path")
const {v4:uuidv4} = require("uuid")
const methodOverride = require("method-override")
const { send } = require("process")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))


let posts = [
    {
        id : uuidv4(),
        username : "Virang",
        content : "DNA is like a computer program but far, far more advanced than any software ever created."
    },
    {
        id : uuidv4(),
        username : "Abhinav",
        content : "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
    },
    {
        id : uuidv4(),
        username : "Uday",
        content : "I would tell you a UDP joke, but you might not get it."
    },
    {
        id : uuidv4(),
        username : "Meet",
        content : "There are 10 types of people in the world: those who understand binary, and those who don’t."
    }
]

app.get("/", (req, res) => {
    res.redirect("/posts")
})
app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res) => {
    res.render("new");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("show", {post})
})

app.post("/posts", (req,res)=> {
    let {username, content} = req.body
    let id = uuidv4()
    posts.push({id, username, content})
    res.redirect("/posts")
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((p) => id === p.id)
    post.content = newContent
    res.redirect("/posts")
})

app.delete("/post/:id", (req, res) => {
    let {id} = req.params
    posts = posts.filter((p) => id != p.id)
    res.redirect("/posts")
    
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    res.render("edit", {post})
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`))

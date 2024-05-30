const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.set(express.static("public", path.join(__dirname, "public")))


const posts = [
    
]


app.listen(PORT, () => console.log(`Server started at ${PORT}`))
const express = require("express");
const layouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const Blog = require("./model/blog");


const app = express();
const port = 3000;



//views Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "./layout/main")

//srt EJS as temple engine for static files
app.use(express.static("public"));
app.use(cookieParser());

// Parse Fson and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(layouts)

const title = "home page";
const description = "pirince liyo web site and porfolio"


app.get("/", (req, res)=>{
   res.render("pages/index",{title, description} )
})


app.listen(port, ()=>{
   console.log(`the server is listining to the port ${port}`)
})
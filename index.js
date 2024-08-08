const express = require('express');
const { env, title } = require('process');
const layout = require("express-layout")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const blogsChema = require("./model/blog")
const fs = require("fs")
const path = require("path")
const port = process.env.PORT || 3000;

const app = express();


// import route
const authRoutes = require("./routes/auth.js")
const blogRoutes = require("./routes/blogPost.js")
// template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
require("dotenv").config();
// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static.public);
app.use(express.json());



app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, ()=>{
   console.log(`serveer is listining in Port ${PORT}`)
})





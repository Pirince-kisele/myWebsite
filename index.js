const express = require("express");
const layots = require("express-layout");
const mongoose = require("mongoose");
const Blog = require("./model/blog")




const app = express();


const port = 3000;


app.listen(port, ()=>{
   console.log(`the server is listining to the port ${port}`)
})
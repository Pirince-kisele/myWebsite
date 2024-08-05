const express = require('express');
const { env, title } = require('process');
const app = express();
const bodyParser = require("body-parser")
const blogsChema = require("./model/blog")
const fs = require("fs")
const path = require("path")
const port = process.env.Port || 3000;

app.set("view engine", "ejs");
require("dotenv").config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static.public);
app.use(express.json());

//this code is for upload the image in the db
var multer = require("multer");
var storage = multer.diskStorage({
   destination:(req, file, cb) =>{
      cb(null,file.fieldname + "-" + Date.now())
   }
});
var upload = multer({storage: storage})


app.get('/', (req, res) => res.send('Hello World!'));



app.post("/", upload.single("image"),(req, res, next) =>{
var obj = {
   title: req.body.title,
   content: req.body.content,
   image: {
      data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.fieldname)),
      contentType: "image/png"
   },
   likes: req.body.likes,
   comments: req.body.comments
}
const blog = blogsChema.create(obj)

})
const mongoose = require("mongoose");
const { type } = require("os");

const blogsChema = new mongoose.Schema({
    title: {
    type: String,
    required: true
  },
  image:{
   data: Buffer,
   contentType: String
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
   
  likes: [{
    type: mongoose.Schema.Types.ObjectId,ref: "User"
   
  }],
  comments: [{user:{
   type:mongoose.Schema.Types.ObjectId,ref:"User"
  }}]
}
, { timestamps: true });
// export the schema || the Blog inside the model is the naem of the collection in the database
const Blog = mongoose.model('Blog', blogsChema);
// here we export the model in order to use it in the other files sever.js file
module.exports = mongoose.model("Blog", blogsChema);

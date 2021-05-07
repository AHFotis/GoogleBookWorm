const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String },
  title: { type: String, required: true },
  author: { type: Array },
  description: String,
  img: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

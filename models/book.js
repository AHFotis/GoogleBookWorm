const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: Array },
  description: { type: String },
  img: { type: String },
  link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

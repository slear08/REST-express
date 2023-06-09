import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  datePublished: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.model("Book", bookSchema);

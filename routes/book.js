import express from "express";
import Book from "../models/books.js";

const router = express.Router();

//GET REQUEST ALL
router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//GET REQUEST ONE
router.get("/:id", getBook, async (req, res) => {
  res.json(res.book);
});

//POST REQUEST ONE
router.post("/", async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//PATCH REQUEST
router.patch("/:id", getBook, async (req, res) => {
  try {
    if (req.body.name !== null) {
      res.book.name = req.body.name;
    }
    if (req.body.author !== null) {
      res.book.author = req.body.author;
    }

    const updateData = await res.book.save();
    res.json(updateData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE REQUEST
router.delete("/:id", getBook, async (req, res) => {
  try {
    await res.book.deleteOne();
    res.json({ message: "BOOK DELETED" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getBook(req, res, next) {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.book = book;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default router;

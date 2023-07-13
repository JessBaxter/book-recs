import { ObjectId } from "mongodb";
import Book from "../models/book.js";

// CREATE
export const renderAddBookForm = (req, res) => {
  res.render("addBook");
};

export const addBook = async (req, res) => {
  const book = new Book(req.db);
  try {
    const result = await book.save(req.body);
    res.redirect(`/books/${result.insertedId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding book");
  }
};

// READ
export const getBook = async (req, res) => {
  const book = new Book(req.db);
  try {
    const bookData = await book.getBookById(new ObjectId(req.params.id));
    if (bookData) {
      res.render("book", { book: bookData });
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting book");
  }
};

export const getAllBooks = async (req, res) => {
  const book = new Book(req.db);
  try {
    const allBooks = await book.getAllBooks();
    res.render("books", { books: allBooks });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting all books");
  }
};

// UPDATE
export const renderEditBookForm = async (req, res) => {
  const book = new Book(req.db);
  try {
    const bookData = await book.getBookById(new ObjectId(req.params.id));
    if (bookData) {
      res.render("editBook", { book: bookData });
    } else {
      res.status(404).send("Book not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting book");
  }
};

export const editBook = async (req, res) => {
  const book = new Book(req.db);
  try {
    const result = await book.updateBook(new ObjectId(req.params.id), req.body);
    res.redirect(`/books/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating book");
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  const book = new Book(req.db);
  try {
    await book.deleteBook(new ObjectId(req.params.id));
    res.redirect("/books");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting book");
  }
};

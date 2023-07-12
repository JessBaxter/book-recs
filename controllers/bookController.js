import Book from "../models/book.js";

export const getBook = async (req, res, db) => {
  const book = new Book(db, req.params.id);
  await book.fetch();
  res.render("book", { book: book });
};

import express from "express";
import {
  addBook,
  deleteBook,
  editBook,
  getAllBooks,
  getBook,
  renderAddBookForm,
  renderEditBookForm,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/add", renderAddBookForm);
bookRouter.post("/:id/edit", editBook);
bookRouter.get("/:id/edit", renderEditBookForm);
bookRouter.post("/:id/delete", deleteBook);
bookRouter.get("/:id", getBook);
bookRouter.post("/", addBook);
bookRouter.get("/", getAllBooks);

export default bookRouter;

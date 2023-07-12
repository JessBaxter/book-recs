import express from "express";
import { getBook } from "../controllers/bookController.js";
import { db } from "../database.js";

const router = express.Router();

router.get("/:id", (req, res) => getBook(req, res, db));

export default router;

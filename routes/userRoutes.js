import express from "express";
import { getUser } from "../controllers/userController.js";
import { db } from "../database.js";

const router = express.Router();

router.get("/:id", (req, res) => getUser(req, res, db));

export default router;

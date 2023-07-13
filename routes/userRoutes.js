import express from "express";
import { getUser } from "../controllers/userController.js";
import { db } from "../database.js";

const userRouter = express.Router();

userRouter.get("/:id", (req, res) => getUser(req, res, db));

export default userRouter;

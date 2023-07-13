import express from "express";
import bookRouter from "./bookRoutes.js";

const mainRouter = express.Router();

// Serve static resources
mainRouter.use(express.static("static"));

// Root route
mainRouter.get("/", (req, res) => {
  res.render("home");
});

// Book route
mainRouter.use("/books", bookRouter);

// Handle 404 - Page not found
mainRouter.use("*", (req, res) => {
  res.status(404).send("404 - Page not found");
});

export default mainRouter;

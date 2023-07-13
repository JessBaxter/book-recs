import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { getAllBooks } from "./controllers/bookController.js";
import { db } from "./database.js";
import bookRouter from "./routes/bookRoutes.js";
import mainRouter from "./routes/index.js";

// Obfuscate sensitive variables
dotenv.config();

// Ensure database connection is established before we start listening for requests
const startServer = async () => {
  try {
    // Connect to database
    const database = await db();

    // Create Express application
    const app = express();

    // Enable middleware to parse JSON requests
    app.use(express.json());

    // Enable cross-origin resources sharing
    let allowedOrigins = [`http://127.0.0.1:${process.env.PORT}`]; // default value for dev
    // Change allowedOrigins if in production
    // if (process.env.NODE_ENV === "production") {
    //   allowedOrigins = ["https://HOST.GOES.HERE"];
    // }
    app.use(
      cors({
        origin: function (origin, callback) {
          // Allow requests with no origin (e.g. mobile apps, curl requests)
          if (!origin) return callback(null, true);

          if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
              "The CORS policy for this site does not allow access from the specified origin.";
            return callback(new Error(msg), false);
          }

          return callback(null, true);
        },
      }),
    );

    // Enable the ejs view engine
    app.set("view engine", "ejs");

    // Enable support for URL-encoded request bodies (form posts)
    app.use(express.urlencoded({ extended: true }));

    // Database middleware: attach database to every request
    app.use((req, res, next) => {
      req.db = database;
      next();
    });

    // Use the mainRouter for all routes
    app.use("/", mainRouter);

    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Express started on http://127.0.0.1:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

startServer();

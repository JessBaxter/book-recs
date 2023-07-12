import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// Obfuscate sensitive variables
dotenv.config();

// Create Express application
const app = express();
const port = process.env.PORT;

// Enable middleware to parse JSON requests
app.use(express.json());

// Enable cross-origin resources sharing
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = ["http://127.0.0.1"];

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

// Redirect requests to root to layout/main.ejs
app.get("/", (req, res) => {
  res.status(301).redirect("/layout/main.ejs");
});

// Serve static resources
app.use(express.static("static"));

// Start listening for requests
app.listen(port, () => {
  console.log(`Express started on http://127.0.0.1:${port}`);
});

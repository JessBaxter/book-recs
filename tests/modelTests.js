import assert from "assert";
import { after, before, describe, it } from "mocha";
import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import Book from "../models/book.js";
import User from "../models/user.js";

describe("Model tests", function () {
  let mongoServer;
  let client;
  let db;

  before(async function () {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    client = new MongoClient(mongoUri);
    await client.connect();
    const dbName = mongoUri.substring(mongoUri.lastIndexOf("/") + 1);
    db = client.db(dbName);
  });

  after(async function () {
    if (client) {
      await client.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  describe("Book model", function () {
    it("should save a book to the database", async function () {
      const book = new Book(
        db,
        "1",
        "Test Title",
        "Test Author",
        "Test Review",
        "Test Recommendation",
      );
      const result = await book.save();
      assert(result.insertedId); // assert that insertedId exists
    });
  });

  describe("User model", function () {
    it("should save a user to the database", async function () {
      const user = new User(
        db,
        "1",
        "Test Name",
        "test@test.com",
        "password123",
      );
      const result = await user.save();
      assert(result.insertedId); // assert that insertedId exists
    });
  });
});

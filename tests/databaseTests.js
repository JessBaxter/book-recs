import assert from "assert";
import { client, db } from "../database.js";

describe("Database Connection", function () {
  it("should establish a successful connection to the database", async function () {
    try {
      const database = await db();
      // Perform a simple operation to check the connection
      const result = await database.command({ ping: 1 });
      assert.strictEqual(result.ok, 1);
      console.log("Connection to the database successful!");
      await client.close();
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      assert.fail("Database connection failed");
    }
  });
});

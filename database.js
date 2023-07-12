import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function db() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    const db = client.db("book-recs");

    // Return the connected client
    return db;
  } catch (e) {
    console.error(e);
    client.close();
    throw e;
  }
}

export default class Book {
  constructor(db, id, title, author, review, recommendation) {
    this.db = db;
    this.id = id;
    this.title = title;
    this.author = author;
    this.review = review;
    this.recommendation = recommendation;
  }

  async save(bookData) {
    try {
      const result = await this.db.collection("books").insertOne(bookData);
      return result;
    } catch (error) {
      console.error("Error saving book:", error);
      throw error;
    }
  }

  async getBookById(id) {
    try {
      const book = await this.db.collection("books").findOne({ _id: id });
      return book;
    } catch (error) {
      console.error("Error getting book:", error);
      throw error;
    }
  }

  async getAllBooks() {
    try {
      const books = await this.db.collection("books").find().toArray();
      return books;
    } catch (error) {
      console.error("Error getting all books:", error);
      throw error;
    }
  }

  async updateBook(id, bookData) {
    try {
      const result = await this.db
        .collection("books")
        .updateOne({ _id: id }, { $set: bookData });
      return result;
    } catch (error) {
      console.error("Error updating book:", error);
      throw error;
    }
  }

  async deleteBook(id) {
    try {
      const result = await this.db.collection("books").deleteOne({ _id: id });
      return result;
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  }
}

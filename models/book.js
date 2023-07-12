export default class Book {
  constructor(db, id, title, author, review, recommendation) {
    this.db = db;
    this.id = id;
    this.title = title;
    this.author = author;
    this.review = review;
    this.recommendation = recommendation;
  }

  async save() {
    try {
      const bookData = {
        title: this.title,
        author: this.author,
        review: this.review,
        recommendation: this.recommendation,
      };
      const result = await this.db.collection("books").insertOne(bookData);
      return result;
    } catch (error) {
      console.error("Error saving book:", error);
      throw error;
    }
  }
}

export default class User {
  constructor(db, id, name, email, password) {
    this.db = db;
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password; // TODO: hash
  }

  async save() {
    try {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      const result = await this.db.collection("users").insertOne(userData);
      return result;
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  }
}

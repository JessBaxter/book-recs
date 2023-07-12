import User from "../models/user.js";

export const getUser = async (req, res, db) => {
  const user = new User(db, req.params.id);
  await user.fetch();
  res.render("user", { user: user });
};

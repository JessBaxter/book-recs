// Checks if the MongoDB ObjectId is in the valid format
const isValidObjectId = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid ID format");
  }
  next();
};

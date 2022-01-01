const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    idUser: mongoose.SchemaTypes.ObjectId,
    title: String,
    content: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Post", postSchema);

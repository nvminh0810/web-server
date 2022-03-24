const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    owner: mongoose.SchemaTypes.ObjectId,
    title: String,
    content: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

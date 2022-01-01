const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    message: String,
    sender: mongoose.SchemaTypes.ObjectId,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("'Message'", messageSchema);

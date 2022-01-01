const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema(
  {
    name: String,
    members: [mongoose.SchemaTypes.ObjectId],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Group", groupSchema);

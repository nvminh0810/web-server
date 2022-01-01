const mongoose = require("mongoose");
const { Schema } = mongoose;

const conservationSchema = new Schema(
  {
    message: [mongoose.SchemaTypes.ObjectId],
    sender: mongoose.SchemaTypes.ObjectId,
    receiver: mongoose.SchemaTypes.ObjectId,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Conservasion", conservationSchema);

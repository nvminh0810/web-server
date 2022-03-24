const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema(
  {
    name: String,
    members: [mongoose.SchemaTypes.ObjectId],
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

module.exports = mongoose.model("Group", groupSchema);

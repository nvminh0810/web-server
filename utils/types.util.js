const mongoose = require("mongoose");

const toObjectId = (id) => {
  return mongoose.Types.ObjectId(id);
};

module.exports = {
  toObjectId,
};

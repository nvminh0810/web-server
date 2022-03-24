const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
    const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connect to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };

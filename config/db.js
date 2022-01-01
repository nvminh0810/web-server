const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connect to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };

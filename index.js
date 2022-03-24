require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db");

const authRoute = require("./src/routes/auth.route");
const userRoute = require("./src/routes/user.route");
const postRoute = require("./src/routes/post.route");
const groupRoute = require("./src/routes/group.route");

const { errorHandler } = require("./src/middlewares/errorHandler");
const { verifyToken } = require("./src/middlewares/verifyToken");

connectDB();
const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/groups", groupRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

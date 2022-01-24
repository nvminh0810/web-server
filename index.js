require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const conservationRoute = require("./routes/conservation.route");
const messageRoute = require("./routes/message.route");
const groupRoute = require("./routes/group.route");

const { errorHandler } = require("./middlewares/errorHandler");
const { verifyToken } = require("./middlewares/verifyToken");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", verifyToken, postRoute);
app.use("/conservations", verifyToken, conservationRoute);
app.use("/messages", verifyToken, messageRoute);
app.use("/groups", verifyToken, groupRoute);

app.use(errorHandler);

app.listen(8080, () => console.log(`Server is running on port: ${8080}`));

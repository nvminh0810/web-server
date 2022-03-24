const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { throwError } = require("../utils/error.util");

const registerController = async (req, res, next) => {
  try {
    let user = await User.create(req.body);
    const accessToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return throwError("Email is not correct", 400, next);
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.SECRET_KEY
      );
      res.status(200).json({
        data: {
          accessToken,
          name: user.name,
        },
      });
    } else {
      return throwError("Wrong password", 404, next);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerController,
  loginController,
};

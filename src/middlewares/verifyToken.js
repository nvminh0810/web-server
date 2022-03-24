const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/error.util");

const verifyToken = (req, res, next) => {
  const authorization = req.header("authorization");
  if (!authorization) {
    return throwError("Unauthorization", 401, next);
  } else {
    const token = authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    if (userId) {
      req.userId = { userId };
      next();
    } else {
      return throwError("Invalid Token", 401, next);
    }
  }
};

module.exports = { verifyToken };

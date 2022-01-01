const express = require("express");
const router = express.Router();
const {
  getUsers,
  updateUser,
  findUserInfo,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/:userId", findUserInfo);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/group.controller");

router.get("/", getGroups);
router.get("/:groupId", getGroupById);
router.post("/create", createGroup);
router.put("/:groupId", updateGroup);
router.delete("/:groupId", deleteGroup);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/message.controller");

router.get("/", getMessages);
router.get("/:messageId", getMessageById);
router.post("/create", createMessage);
router.put("/:messageId", updateMessage);
router.delete("/:messageId", deleteMessage);

module.exports = router;

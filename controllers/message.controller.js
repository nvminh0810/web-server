const Message = require("../models/message.model");

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

const getMessageById = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const message = await Message.findById(messageId);
    res.status(200).json({
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

const createMessage = async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(200).json({
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

const updateMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const message = await Message.findByIdAndUpdate(messageId, req.body, {
      new: true,
    });
    res.status(200).json({
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const message = await Message.findByIdAndDelete(messageId);
    res.status(200).json({
      data: message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};

const Group = require("../models/group.model");
const { toObjectId } = require("../utils/types.util");

const getGroups = async (req, res, next) => {
  try {
    const groups = await Group.find();
    res.status(200).json({
      data: groups,
    });
  } catch (error) {
    next(error);
  }
};

const getGroupById = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const group = await Group.aggregate([
      { $match: { _id: toObjectId(groupId) } },
      {
        $lookup: {
          from: "users",
          localField: "members",
          foreignField: "_id",
          as: "members",
        },
      },
      { $unset: ["members.groups", "members.password"] },
    ]);
    res.status(200).json({
      data: group,
    });
  } catch (error) {
    next(error);
  }
};

const createGroup = async (req, res, next) => {
  try {
    const group = await Group.create(req.body);
    res.status(200).json({
      data: group,
    });
  } catch (error) {
    next(error);
  }
};

const updateGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const group = await Group.findByIdAndUpdate(groupId, req.body, {
      new: true,
    });
    res.status(200).json({
      data: group,
    });
  } catch (error) {
    next(error);
  }
};

const deleteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const group = await Group.findByIdAndDelete(groupId);
    res.status(200).json({
      data: group,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
};

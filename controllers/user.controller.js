const User = require("../models/user.model");
const { toObjectId } = require("../utils/types.util");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const findUserInfo = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.aggregate([
      { $match: { _id: toObjectId(userId) } },
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "idUser",
          as: "posts",
        },
      },
      {
        $lookup: {
          from: "groups",
          localField: "groups",
          foreignField: "_id",
          as: "groups",
        },
      },
      { $unset: ["posts.idUser", "groups.members"] },
    ]);
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndRemove(userId);
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  findUserInfo,
  updateUser,
  deleteUser,
};

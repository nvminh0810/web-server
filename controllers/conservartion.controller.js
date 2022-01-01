const Conservation = require("../models/conservation.model");

const getConservations = async (req, res, next) => {
  try {
    const conservations = await Conservation.find();
    res.status(200).json({
      data: conservations,
    });
  } catch (error) {
    next(error);
  }
};

const getConservationById = async (req, res, next) => {
  try {
    const { conservationId } = req.params;
    const conservation = await Conservation.findById(conservationId);
    res.status(200).json({
      data: conservation,
    });
  } catch (error) {
    next(error);
  }
};

const createConservation = async (req, res, next) => {
  try {
    const conservation = await Conservation.create(req.body);
    res.status(200).json({
      data: conservation,
    });
  } catch (error) {
    next(error);
  }
};

const updateConservation = async (req, res, next) => {
  try {
    const { conservationId } = req.params;
    const conservation = await Conservation.findByIdAndUpdate(
      conservationId,
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: conservation,
    });
  } catch (error) {
    next(error);
  }
};

const deleteConservation = async (req, res, next) => {
  try {
    const { conservationId } = req.params;
    const conservation = await Conservation.findByIdAndDelete(conservationId);
    res.status(200).json({
      data: conservation,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getConservations,
  getConservationById,
  createConservation,
  updateConservation,
  deleteConservation,
};

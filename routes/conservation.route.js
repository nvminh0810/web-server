const express = require("express");
const router = express.Router();

const {
  getConservations,
  getConservationById,
  createConservation,
  updateConservation,
  deleteConservation,
} = require("../controllers/conservartion.controller");

router.get("/", getConservations);
router.get("/:conservationId", getConservationById);
router.post("/create", createConservation);
router.put("/:conservationId", updateConservation);
router.delete("/:conservationId", deleteConservation);

module.exports = router;

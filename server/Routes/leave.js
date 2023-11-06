const express = require("express");
const router = express.Router();

const {
  listleave,
  createleave,
  readleave,
  updateleave,
  removeleave,
} = require("../Controllers/leaveControllers");

const { auth } = require("../Middleware/auth");

// list leave
router.get("/leave", auth, listleave);
// create leave
router.post("/leave", auth, createleave);
// read leave
router.get("/leave/:id", auth, readleave);
// edit leave
router.put("/leave/:id", auth, updateleave);
// delete leave
router.delete("/leave/:id", auth, removeleave);

module.exports = router;

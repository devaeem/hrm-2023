const express = require("express");
const router = express.Router();
const {
  createposition,
  listposition,
  readposition,
  updateposition,
  removeposition,
} = require("../Controllers/positionControllers");

const { auth } = require("../Middleware/auth")

// list position
router.get("/position",auth, listposition);
// create position
router.post("/position",auth, createposition);
// read position
router.get("/position/:id",auth, readposition);
// edit position
router.put("/position/:id",auth, updateposition);
// delete position
router.delete("/position/:id",auth, removeposition);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createposition,
  listposition,
  readposition,
  updateposition,
  removeposition,
} = require("../Controllers/positionControllers");


// list position
router.get("/position", listposition);
// create position
router.post("/position", createposition);
// read position
router.get("/position/:id", readposition);
// edit position
router.put("/position/:id", updateposition);
// delete position
router.delete("/position/:id", removeposition);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
    login,
    
  } = require("../Controllers/authControllers");
// login users
router.post("/login", login);




module.exports = router;
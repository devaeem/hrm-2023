const express = require("express");
const router = express.Router();
const {
  createuser,
  listuser,
   readuser,
   updateuser,
   resetpassword,
   removeuser,
} = require("../Controllers/usersControllers");

// list users
router.get("/users", listuser);
// create users
 router.post("/users", createuser);
//  read users
 router.get("/users/:id", readuser);
//  edit users
 router.put("/users/:id", updateuser);
//  reset users
 router.put("/resetpassword/:id", resetpassword);
//  delete users
 router.delete("/users/:id", removeuser);

module.exports = router;

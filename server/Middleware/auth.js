const { mongoose } = require("mongoose");
const user = require("../Models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authorization"].replace("Bearer ", "");
    console.log(token);
    if (!token) {
      return res.status(401).send("Unauthorization denied");
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "authorization Fail !!!",
      err
    });
  }
};

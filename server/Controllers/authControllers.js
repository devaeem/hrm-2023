const user = require("../Models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const getuser = await user.findOneAndUpdate({ username }, { new: true });
    if (getuser && getuser.enabled) {
      const isMatch = await bcrypt.compare(password, getuser.password);
      if (!isMatch) {
        return res.status(400).send("Password Invalid!!!");
      }
      const payload = {
        user: {
          username: getuser.username,
          role: getuser.role,
        },
      };
      jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "24h" }, (err, token) => {
        if (err) throw err;
        res.json({ accessToken:token, payload });
      });
    } else {
      return res.status(400).send("User Not found!!!");
    }
  } catch (err) {
    res.status(500).json({
      message: "Server  Login  Error!!!",
      error: err,
    });
  }
};

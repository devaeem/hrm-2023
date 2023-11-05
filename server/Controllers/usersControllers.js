const user = require("../Models/users");
const bcrypt = require("bcryptjs");
exports.listuser = async (req, res) => {
  try {
    const users = await user
      .find({})
      .populate("position")
      .select("-password")
      .exec();
    console.log(users);
    res.status(200).json({
      message: "list all user successfuly",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server list user Error!!!",
      error: err,
    });
  }
};

exports.createuser = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;

    if (username) {
      var users = await user.findOne({ username: username });
      if (users) {
        return res.status(400).send("username Already exists");
      }
    }
    if (email) {
      var users = await user.findOne({ email: email });
      if (users) {
        return res.status(400).send("email Already exists");
      }
    }
    const salt = await bcrypt.genSalt(10);

    const Userdata = await new user(req.body);
    Userdata.password = await bcrypt.hash(req.body.password, salt);
    await Userdata.save();
    res.status(200).json({
      message: "create  user successfuly",
      data: Userdata,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server create users Error!!!",
      error: err,
    });
  }
};

exports.readuser = async (req, res) => {
  try {
    const readUserID = await user
      .findOne({ _id: req.params.id })
      .populate("position")
      .select("-password")
      .exec();
    res.status(200).json({
      message: "read UserID successfuly",
      data: readUserID,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server read position Error!!!",
      error: err,
    });
  }
};

exports.updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await user
      .findByIdAndUpdate({ _id: id }, req.body, { new: true })
      .exec();

    res.status(200).json({
      message: "update user  successfuly",
      data: update,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server update user  Error!!!",
      error: err,
    });
  }
};

exports.resetpassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    var enPasword = await bcrypt.hash(password, salt);
    const users = await user.findOneAndUpdate(
      { _id: id },
      { password: enPasword }
    );

    res.status(200).json({
      message: "update password successfuly",
      data: enPasword,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server update password Error!!!",
      error: err,
    });
  }
};
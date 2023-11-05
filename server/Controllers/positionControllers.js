const position = require("../Models/position");

exports.listposition = async (req, res) => {
  try {
    const positions = await position.find({}).exec();
    res.status(200).json({
      message: "list all position successfuly",
      data: positions,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server list position Error!!!",
    });
  }
};
exports.createposition = async (req, res) => {
  try {
    const positions = await new position(req.body).save();
    res.status(200).json({
      message: "create position successfuly",
      body: positions,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server create position Error!!!",
    });
  }
};

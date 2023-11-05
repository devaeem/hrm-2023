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
      error: err,
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
      error: err,
    });
  }
};
exports.readposition = async (req, res) => {
  try {
    const readID = await position.findOne({ _id: req.params.id }).exec();
    res.status(200).json({
      message: "read position successfuly",
      data: readID,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server read position Error!!!",
      error: err,
    });
  }
};

exports.updateposition = async (req, res) => {
  try {
    const update = await position.findByIdAndUpdate({ _id: req.params.id },{name:req.body.name})
    res.status(200).json({
      message: "update position successfuly",
      data: update,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server update position Error!!!",
      error: err,
    });
  }
};

exports.removeposition = async (req, res) => {
  try {
    const remove = await position.findByIdAndDelete({ _id: req.params.id })
    res.status(200).json({
      message: "Delete position successfuly",
      data: remove,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Delete position Error!!!",
      error: err,
    });
  }
};

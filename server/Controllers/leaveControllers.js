
const leave = require("../Models/leave");

exports.listleave = async (req, res) => {
    try {
        const data = await leave.find({}).exec();
      res.status(200).json({
        message: "list leave  successfuly",
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server list leave Error!!!",
        error: err,
      });
    }
  };

  exports.createleave = async (req, res) => {
    try {
        const data = await new leave(req.body).save();
      res.status(200).json({
        message: "create leave  successfuly",
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server create leave Error!!!",
        error: err,
      });
    }
  };

  exports.readleave = async (req, res) => {
    try {
      
      res.status(200).json({
        message: "read leave  successfuly",
        data: '',
      });
    } catch (err) {
      res.status(500).json({
        message: "Server read leave Error!!!",
        error: err,
      });
    }
  };

  exports.updateleave = async (req, res) => {
    try {
      
      res.status(200).json({
        message: "update leave  successfuly",
        data: '',
      });
    } catch (err) {
      res.status(500).json({
        message: "Server update leave Error!!!",
        error: err,
      });
    }
  };

  exports.removeleave = async (req, res) => {
    try {
      
      res.status(200).json({
        message: "Delete leave  successfuly",
        data: '',
      });
    } catch (err) {
      res.status(500).json({
        message: "Server Delete leave Error!!!",
        error: err,
      });
    }
  };
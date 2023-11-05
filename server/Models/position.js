const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
   
    enabled: {
      type: Boolean,
      default: "false",
    },
    
  },

  { timestamps: true }
);

module.exports = mongoose.model("position", positionSchema);
const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
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

module.exports = mongoose.model("leave", leaveSchema);
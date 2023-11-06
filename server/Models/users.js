const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
    email: {
      type: String,
     
    },
    fristname: {
      type: String,
      
    },
    lastname: {
      type: String,
      
    },
    age: {
      type: Number,
    },

    phone: {
      type: String,
    },
    position:{
        type: ObjectId,
        ref: 'position'
    },
    role: {
      type: String,
      default: "user",
    },

    enabled: {
      type: Boolean,
      default: "false",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

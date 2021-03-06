const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: false
  },
  Situation: {
    type: String,
    required: false
  },
  GrSanguin: {
    type: String,
    required: false
  },
  Tele: {
    type: String,
    required: false
  },
  secretTele: {
    type: String
  },
  name: {
    type: String
  },
  handle: {
    type: String
  },
  // avatar: {
  //   type: String
  // },
  // NomUtulisateur: {
  //   type: String
  // },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      // avatar: {
      //   type: String
      // },
      handle: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
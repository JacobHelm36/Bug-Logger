import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    closed: {type: Boolean, default: false},
    description: { type: String, required: true },
    title: { type: String, required: true },
    reportedBy: { type: String, required: true},
    //need this to be acted upon when the boolean is tripped to true. Function?
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;
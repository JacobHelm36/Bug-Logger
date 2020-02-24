import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const Note = new Schema(
  {
    content: { type: String, required: true },
    bug: { type: ObjectId, ref: "Bug" },
    reportedBy: {type:String}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;
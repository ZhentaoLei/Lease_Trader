import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  email: String,
  title: String,
  city: String,
  monthlypayment: Number,
  tags: [String],
  postDate: {
    type: Date,
    default: new Date(),
  },
  img: String,
});

const PostMessage = mongoose.model("postMessage", postSchema);
export default PostMessage;

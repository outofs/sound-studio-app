import mongoose from "mongoose";

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  bannerImg: {
    type: String,
    required: true,
  },

  posterImg: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  videos: {
    type: [String],
  },

  desc: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Service", ServiceSchema);

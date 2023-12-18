import mongoose from "mongoose";

//
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  images: [String],
  price: {
    type: {
      cost: Number,
      currency: String,
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  sizes: [String],
  materials: [String],
  skill: String,
  techniques: [String],

  patternType: {
    type: String,
    required: true,
  }
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

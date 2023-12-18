import mongoose from "mongoose";

const BasketItemSchema = new mongoose.Schema({
  userId: String,
  image: String,
  name: {
    type: String,
    required: true,
  },

  size: String,

  price: {
    type: {
      cost: Number,
      currency: String,
    },
    required: true,
  },
});

export default mongoose.models.BasketItem ||
  mongoose.model("BasketItem", BasketItemSchema);

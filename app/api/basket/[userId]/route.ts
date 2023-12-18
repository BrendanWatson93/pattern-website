import mongoose from "mongoose";
import Basket from "@/models/basket";

// api route /api/basket - define in post request creation of new document using basket items model

// add product submits request to this api
// api needs to
// - search the database for the given product id
// - return json of given product
// - include catch error

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const userId = params.userId;
    const basketItems = await Basket.find({ userId: userId });

    return Response.json(basketItems);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Response.json({ error: "Failed to connect to the database" });
  }
}


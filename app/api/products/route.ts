import mongoose from "mongoose";
import Product from "@/models/product";

export async function GET(request: Request) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    // Find ALL the products
    const products = await Product.find().limit(3);

    return Response.json(products)
  } 
  
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Response.json({ error: "Failed to connect to the database" });
  } 
  
}

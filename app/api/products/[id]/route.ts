import mongoose from "mongoose";
import Product from "@/models/product";

export async function GET(request: Request, {params} : {params: {id: string}}) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const id = params.id
    // Find a product that matches the id
    const product = await Product.findById(id);

    return Response.json(product)
  } 
  
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Response.json({ error: "Failed to connect to the database" });
  } 
  
}

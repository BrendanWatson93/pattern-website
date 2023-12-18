import mongoose from "mongoose";
import Basket from "@/models/basket";
import type { basketitem } from "@/types/basketitem";


export async function POST(request: Request) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    
    const body = await request.json() as basketitem
 
    const newBasketitem = new Basket(body);

    // Save the new Basket document to the database
    const savedBasketitem = await newBasketitem.save();

    return Response.json(savedBasketitem);
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Response.json({ error: "Failed to connect to the database" });
  }
}


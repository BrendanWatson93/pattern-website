import mongoose from "mongoose";
import Blog from "@/models/blog";


export async function GET(request: Request) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    // Find ALL the products
    const blogposts = await Blog.find();

    return Response.json(blogposts)
  } 
  
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Response.json({ error: "Failed to connect to the database" });
  } 
  
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { blogpost } from "@/types/blogpost";

const Blog = () => {
  const [blogpost, setBlogpost] = useState<blogpost[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("/api/blogpost");
      const productsJson = await response.json();

      setBlogpost(productsJson);
    };

    getProduct();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900">
      <h1 className="Heading1 colour_gradient">Blog Posts</h1>
      <div className="flex justify-center space-x-4">
        <button className="button1 text-xl">Knit</button>
        <button className="button1 text-xl">Crochet</button>
        <button className="button1 text-xl">Show All</button>
      </div>

      <div>
      <div className="grow grid grid-cols-2 gap-4 px-4">
        {blogpost &&
          blogpost.map((blogpost) => {
            return (
              <Link href={`/product/${blogpost._id}`} key={blogpost._id}>
                <div className="flex gap-x-4">
                  <div className="Blogimage relative">
                    <Image
                      priority
                      fill
                      className="object-center rounded-md object-cover"
                      src={blogpost.images}
                      alt=""
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="basis-1/2">
                    <h1 className="Blogheading ">Blog Title</h1>
                    <h2 className="Blogsubhead ">Blog Tagline</h2>
                    <p className="text">
                      {" "}
                      First X characters of blog on display as an intro
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default Blog;

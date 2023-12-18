"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { product } from "@/types/product";
import type { blogpost } from "@/types/blogpost";

const Home = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [blogposts, setBlogposts] = useState<blogpost[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("/api/products");
      const productsJson = await response.json();

      setProducts(productsJson);
    };

    const getBlogpost = async () => {
      const response = await fetch("/api/blogpost");
      const blogpostJson = await response.json();

      setBlogposts(blogpostJson)
    };

    getBlogpost();
    getProduct();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="relative h-[50vh]">
          <Image
            className="object-cover object-center"
            priority
            fill
            src="/knittingbanner.jpeg"
            alt=""
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
          />
        </div>

        {/* Parent flex box */}
        <div className="flex justify-center items-start gap-8 px-8 pt-8">
          {/* Child - Welcome text block */}
          <div className="bg-white rounded-lg p-8 basis-[30%] bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <h1 className="Heading1 py-2 ">WELCOME</h1>
            <p className="text-center text">
              This website is a collection of knitting and crochet patterns
              which I have designed for a variety of crafters, from nice simple
              patterns for absolute beginners to more complex patterns for
              experienced makers. For those who are looking to learn the basics,
              build on their skills and knowledge or learn brand new techniques
              check out the blog posts section - its packed with informative and
              descriptive articles which will help you become a better crafter.
            </p>
          </div>

          {/* Child - Latest designs block */}
          <div className="bg-white rounded-lg grow p-8 bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <h1 className="Heading1 ">LATEST DESIGNS</h1>
            <p className="text-center text ">BROWSE OUR NEWEST DESIGNS</p>

            <div className="grid grid-cols-3 gap-5 ">
              {products &&
                products.map((product) => {
                  return (
                    <Link href={`/product/${product._id}`} key={product._id}>
                      <div className="Imageblock Imagehover relative">
                        <Image
                          priority
                          fill
                          className="object-center rounded-md object-cover"
                          src={product.images[0]}
                          alt=""
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div>
          <h1 className="Heading1">BLOG POSTS</h1>
        </div>
        <p className="text-center text">INTRO TEXT</p>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {blogposts &&
          blogposts.map((blogpost) => {
            return (
              <Link href={`/product/${blogpost._id}`} key={blogpost._id}>
                <div className="Imageblock Imagehover relative">
                  <Image
                    priority
                    fill
                    className="object-center rounded-md object-cover"
                    src={blogpost.images[0]}
                    alt=""
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;

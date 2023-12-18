"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { product } from "@/types/product";

const Knitting = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("/api/products/knitting");
      const productsJson = await response.json();
      console.log(productsJson);
      setProducts(productsJson);
    };

    getProduct();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="flex justify-center">
        <h1 className="Heading1 py-8 ">Knitting</h1>
      </div>
      <p className="text-center pb-8 text">
        BROWSE OUR COLLECTION OF KNITTING PATTERNS
      </p>

      <div className="flex pt-8 justify-center">
        <div className="max-w-[80%] grow  rounded-lg p-8  bg-white rounded-r-sm bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <h1 className="text-center text Subhead">Latest Patterns</h1>

          <div className="grid grid-cols-3 gap-20 py-2 px-3">
            {products &&
              products.slice(0, 3).map((product) => {
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

      <div className="flex pt-8 justify-center">
        <div className="max-w-[80%] grow  rounded-lg p-8  bg-white rounded-r-sm bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <h1 className="text-center text Subhead">All Patterns</h1>
     

        <div className="line_break grid grid-cols-5 gap-5 py-2 px-3">
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
    </div>
  );
};

export default Knitting;

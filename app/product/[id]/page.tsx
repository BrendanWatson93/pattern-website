"use client";

import Productimage from "@/components/Productimage";
import Productinfo from "@/components/Productinfo";
import Purchase from "@/components/Purchase";
import { useState, useEffect } from "react";
import type { product } from "@/types/product";

const Productreactcomponent = ({ params }: { params: { id: string } }) => {
 
  const [useStateProduct, setProduct] = useState<product | undefined>(
    undefined
  );

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/products/${params.id}`);
      const productJson = await response.json();

      setProduct(productJson);
    };

    getProduct();
  }, []);

  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-900 to-blue-900 gap-x-4 p-4">
      {useStateProduct && (
        <>
          <Productimage productArg={useStateProduct} />
          <div className="basis-1/2">
            <Productinfo product={useStateProduct} />
            <Purchase product={useStateProduct}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Productreactcomponent;

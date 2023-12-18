import Image from "next/image";
import type { product as productType } from "@/types/product";

const Productimagereactcomponent = ({ productArg }: { productArg: productType }) => {
  return (
    <div className="basis-1/3 flex gap-x-4">
      <div className="basis-1/4 grid grid-cols-1 grid-rows-4 gap-4">
        <div className="Altimage"></div>
        <div className="Altimage"></div>
        <div className="Altimage"></div>
        <div className="Altimage"></div>
      </div>

      <div className="productimage relative">
        <Image
          fill
          objectFit="cover"
          src={productArg ? productArg.images[0] : ""}
          alt=""
        />
      </div>
    </div>
  );
};

export default Productimagereactcomponent;

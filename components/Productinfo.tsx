import type { product } from "@/types/product";

const Productinfo = ({ product } : { product: product}) => {
  return (
    <div>
      <div>
        <h1 className="Productheading ">
          {product ? product.name : ""}
        </h1>
      </div>
      <p className="text pl-4">{product ? product.description : ""}</p>
      <h2 className="Subhead text">Sizing</h2>
      <p className="text pl-4">
        {product
          ? product.sizes.map((size) => {
              return (
                <span className="mr-4" key={size}>
                  {size}
                </span>
              );
            })
          : ""}
      </p>
      <h2 className="Subhead text">Materials</h2>
      <p className="text pl-4">
        {product
          ? product.materials.map((material) => {
              return (
                <span className="mr-4" key={material}>
                  {material}
                </span>
              );
            })
          : ""}
      </p>
      <h2 className="Subhead text">Skill Level</h2>
      <p className="text pl-4">{product ? product.skill : ""}</p>
      <h2 className="Subhead text">Techniques Used</h2>

      <p className="text pl-4">
        {product
          ? product.techniques.map((technique) => {
              return (
                <span className="mr-4" key={technique}>
                  {technique}
                </span>
              );
            })
          : ""}
      </p>
    </div>
  );
};

export default Productinfo;

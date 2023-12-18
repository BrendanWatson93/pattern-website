import type { product } from "@/types/product";
import { useAuth } from "@clerk/nextjs";

const Purchase = ({ product }: { product: product }) => {
  const { userId } = useAuth();

  const handleAddToBasket = async () => {
    const response = await fetch("/api/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        userId: userId,
        image: product.images[0],
        name: product.name,

        size: product.sizes[0],

        price: {
          cost: product.price.cost,
          currency: product.price.currency,
        },
      }), // Convert the object to JSON string
    });
  };

  return (
    <div>
      <form className="flex justify-center">
        <div className="space-x-2 py-2 pr-2">
          <button
            onClick={handleAddToBasket}
            className="button1 text-xl text space-x-2"
          >
            Add To Basket
          </button>
        </div>
      </form>
    </div>
  );
};

export default Purchase;

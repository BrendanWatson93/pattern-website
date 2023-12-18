"use client";

import React from "react";
import { basketitem } from "@/types/basketitem";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Basket = () => {
  const { userId } = useAuth();

  const [basketItems, setBasketItems] = useState<basketitem[]>([]);

  useEffect(() => {
    if (userId) {
      const getProduct = async () => {
        const response = await fetch(`/api/basket/${userId}`);
        const basketitemsJson = await response.json();

        setBasketItems(basketitemsJson);
      };

      getProduct();
    }
  }, [userId]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const handleCheckout = async () => {
    if (basketItems) {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(basketItems), // Convert the object to JSON string
      });
      const checkoutSession = await response.json()
      await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
    }
  };

  return (
    <div className="bg-gradient-to-r min-h-screen from-purple-900 to-blue-900">
      <div className="flex justify-center pt-2">
        <h1 className="Heading1 colour_gradient">CHECKOUT</h1>
      </div>
      <div className="text-center text">
        <p className="text-lg">ITEMS IN BASKET</p>
        <p className="py-4">
          This PDF pattern will be added to your personal library. You will also
          receive a confirmation email that includes a download link.
        </p>
      </div>

      <div className="items-center gap-y-4 flex flex-col">
        {basketItems &&
          basketItems.map((basketItem) => {
            return (
              <div className="w-[50%]" key={basketItem.name}>
                <div className="bg-white rounded-lg px-8 py-2 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                  <div className="flex">
                    <div className="basis-[10%] aspect-[2/3] relative">
                      <Image
                        priority
                        fill
                        className="object-center rounded-md object-cover"
                        src={basketItem.image}
                        alt=""
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                      />
                    </div>

                    <div className="grow flex justify-between items-center">
                      <h1 className="Subhead px-2 basis-1/2 text">
                        {basketItem.name}
                      </h1>
                      <h1 className="text Subhead px-2">
                        £{basketItem.price.cost}
                      </h1>
                      <button className="button1 text">REMOVE</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center py-4 mx-8">
        <h1 className="text Subhead">
          TOTAL COST: £
          {basketItems.reduce((accumulator, basketItem) => {
            return accumulator + basketItem.price.cost;
          }, 0)}
        </h1>
      </div>

      <div className="flex justify-center space-x-2 py-2">
        <button
          className="bg-white rounded-lg px-8 py-2 bg-opacity-30 backdrop-filter backdrop-blur-lg button1"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Basket;

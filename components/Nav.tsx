"use client";

import Link from "next/link";
import "material-icons/iconfont/material-icons.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {useState,useEffect} from "react";
import { useAuth } from "@clerk/nextjs";
import { basketitem } from "@/types/basketitem";

const Nav = () => {
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


  return (
    <div>
      <div className="relative box-content w-auto p-2 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="flex justify-between py-2 items-center">

          <div className="flex px-8">

            <form className="flex items-center rounded-lg border-2 border-white border-opacity-30 border-filter border-blur-lg">
              <input
                className="custom_placeholder py-1 rounded-l-lg pl-2"
                type="text"
                placeholder="Search..."
              />
              <button className="bg-white rounded-r-sm bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <span className="material-icons items-center pt-1 text-white">search</span>
              </button>
            </form>
          </div>

           <div className="flex items-center absolute inset-0 justify-center space-x-3">
          <Link href="/">
            <button className="button1">HOME</button>
          </Link>
          <Link href="/knitting">
            <button className="button1">Knitting</button>
          </Link>
          <Link href="/crochet">
            <button className="button1">Crochet</button>{" "}
          </Link>
          <Link href="/contact">
            <button className="button1">Contact</button>{" "}
          </Link>
          <Link href="/blog">
            <button className="button1">Blog</button>{" "}
          </Link>
         </div>

          <div className="flex space-x-3 px-8 items-center">

            <div className="text-white Subhead button1 bg-white rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <SignedIn>
              <UserButton/>
              <Link href="/basket">
                <button className= "flex flex-col items-center button1">
                  <div className="flex justify-center">
                  {basketItems.length}
                  <span className="material-icons -mb-1">shopping_cart</span>
                  </div>
                  Basket
                </button>
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Nav;

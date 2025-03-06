import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartItems,
  items,
  searchedItems,
  searchSpecificItems,
} from "./state/atom";

export default function Home() {
  const [search, setSearch] = useRecoilState(searchedItems);

  const itemsInSearchBar = useRecoilValue(searchSpecificItems);

  const [carted, setCarted] = useRecoilState(cartItems);

  useEffect(() => {
    localStorage.setItem("searchedItem", search);
  }, [search]);

  const handleToggleCart = (product) => {
    const isInCart = carted.some((item) => item.id === product.id);
    let updatedCart;
    if (isInCart) {
      updatedCart = carted.filter((item) => item.id !== product.id);
    } else {
      updatedCart = [...carted, { ...product, count: 1 }];
    }
    setCarted(updatedCart);
    localStorage.setItem("cartedInItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Search for item"
        value={search}
        className="w-[40%] p-3 bg-slate-100 m-4 border-2 border-black"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {itemsInSearchBar.map((samaan) => {
          const isInCart = carted.some((item) => item.id === samaan.id);
          return (
            <div
              key={samaan.id}
              className="flex flex-col items-center w-64 p-4 border rounded-lg shadow-md"
            >
              <img
                src={samaan.img}
                alt=""
                className="w-full h-full p-3 object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-semibold">{samaan.model}</p>
              <p className="mt-2 text-lg font-semibold">{samaan.brand}</p>
              <p className="mt-2 text-lg ">{samaan.space}</p>
              <p className="mt-2 text-lg font-semibold">₹{samaan.price}</p>
              <button
                className={`p-2 rounded-lg mt-2 ${
                  isInCart
                    ? "bg-red-600 hover:bg-red-400 text-white"
                    : "bg-blue-600 hover:bg-blue-400 text-white"
                }`}
                onClick={() => handleToggleCart(samaan)}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

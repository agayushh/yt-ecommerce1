import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { items, searchedItems, searchSpecificItems } from "./state/atom";

export default function Home() {
  const [search, setSearch] = useRecoilState(searchedItems);

  const product = useRecoilValue(items);

  const itemsInSearchBar = useRecoilValue(searchSpecificItems);

  localStorage.setItem("searchedItem", search);

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
        {itemsInSearchBar.map((samaan) => (
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
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-400 mt-2">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

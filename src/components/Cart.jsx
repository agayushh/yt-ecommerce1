import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { items } from "./state/atom";

export default function Cart() {
  // const product = useRecoilValue(items);
  const [allItems, setAllItems] = useRecoilState(items);

  const carted = allItems.filter((item)=>item.count >0)

  const updateQuantity = (id, count) => {
    setAllItems((prevValue) => {
      return prevValue.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + count };
        }
        return item;
      });
    });
  };
  return (
    <div>
      <div className="text-2xl m-5">Cart Items</div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-grow mr-0 md:mr-20">
          {carted.length === 0 ? (
            <p className="text-2xl text-center file:">Cart is empty</p>
          ) : (
            carted.map((item) => (
              <div
                key={item.id}
                className="border h-40 w-full ml-0 md:ml-5 flex justify-between items-center my-3"
              >
                <img src={item.img} alt="" className="h-20 w-20 ml-5" />
                <div>{item.model}</div>
                <div className="flex mr-5 border">
                  <button
                    className="border px-1.5"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <div className="px-1.5">{item.count}</div>
                  <button
                    className="border px-1.5"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-2 h-64 w-full md:w-96"></div>
      </div>
    </div>
  );
}

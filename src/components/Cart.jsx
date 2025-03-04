import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { items } from "./state/atom";

export default function Cart() {
  const product = useRecoilValue(items);
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div className="text-2xl m-5">Cart Items</div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-grow mr-0 md:mr-20">
          {product.map((item) => (
            <div
              key={item.id}
              className="border h-40 w-full ml-0 md:ml-5 flex justify-between items-center my-3"
            >
              <img src={item.img} alt="" className="h-20 w-20 ml-5" />
              <div>{item.model}</div>
              <div className="flex mr-5 border">
                <button
                  className="border px-1.5"
                  onClick={() => updateQuantity}
                >
                  +
                </button>
                <div className="px-1.5">{item.count}</div>
                <button
                  className="border px-1.5"
                  onClick={() => setQuantity((c) => c - 1)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 h-64 w-full md:w-96"></div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { items } from "./state/atom";
import productList from "./data";

export default function Home() {
  const [product, setProduct] = useRecoilState(items);

  useEffect(() => {
    setProduct(productList);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {product.map((samaan) => (
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
        </div>
      ))}
    </div>
  );
}

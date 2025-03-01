import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useRecoilState } from "recoil";
import { items } from "./components/state/atom";
import { useEffect, useState } from "react";
import productList from "./components/data";

function App() {
  const [product, setProduct] = useRecoilState(items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProduct(productList);
    setLoading(false);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

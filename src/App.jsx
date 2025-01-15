import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="p-11">
      <h1 className="text-center text-4xl font-bold mb-7">
        Add to Cart Functionality - Using Redux state management
      </h1>
      <BrowserRouter>
        <div className="flex items-center justify-center gap-6 p-8">
          <Link
            className="text-white font-bold px-7 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
            to={"/"}
          >
            Products
          </Link>
          <Link
            className="text-white font-bold px-7 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
            to={"/cart"}
          >
            Cart - {cart.length}
          </Link>
        </div>
        <Routes>
          <Route index element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <p className="mt-8">By - Muhammad Abu Huraira</p>
    </div>
  );
}

export default App;

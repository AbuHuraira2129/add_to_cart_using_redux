import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart/CartSlice";
import { products } from "../../products.js";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="pb-7 text-3xl font-bold">Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div className="bg-gray-100 p-7 rounded-xl" key={product.id}>
            <p className="text-2xl mb-3">{product.name}</p>
            <p>Price: ${product.price}</p>
            <button
              className="mt-5 w-full text-white font-bold px-7 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Cart/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="pb-7 text-3xl font-bold">Cart</h2>
      <div className="grid grid-cols-4 gap-6 mb-7">
        {cart.items.map((item) => (
          <div className="bg-gray-100 p-7 rounded-xl" key={item.id}>
            <p className="text-2xl mb-3">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.totalPrice}</p>
            <button
              className="mt-5 w-full text-white font-bold px-7 bg-red-600 hover:bg-red-700 py-3 rounded-xl"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h3>Total Items: {cart.totalQuantity}</h3>
      <h3>
        Total Price:{" "}
        <span className="text-red-500 text-xl font-semibold">
          ${cart.totalPrice}
        </span>
      </h3>
    </div>
  );
};

export default Cart;

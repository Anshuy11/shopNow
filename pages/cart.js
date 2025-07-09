import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/cartSlice";
import PathBackButton from "@/components/PathBackButton";
import { useRouter } from "next/router";

const cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  /* If there is no Item In Cart */
  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-600 text-xl">
        🛒 No items in cart
      </div>
    );
  }
  const router = useRouter();

  return (
    <>
      <PathBackButton />

      <div className="max-w-4xl mx-auto p-4 h-screen">
        <h2 className=" font-bold mb-4">Your Cart</h2>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-3 rounded-lg shadow"
            >
              <div
               
                className="flex items-center space-x-4 md:w-2/3 w-4/5 "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div   className="w-full">
                  <div onClick={() => router.push(`/products/${item.id}`)} className="cursor-pointer">
                    <div className="font-normal text-[12px] line-clamp-2 lg:text-[14px] ">
                    {item.title}
                  </div>
                  <div className="text-sm  ">₹ {item.price}</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center md:space-x-3 space-x-1 mt-2 md:hidden cursor-pointer">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-gray-400 md:px-2 px-1 rounded"
                      >
                        -
                      </button>
                      <span className="text-[12px] md:text-[14px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="bg-gray-400 md:px-2 px-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:flex items-center md:space-x-3 space-x-1 hidden ">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-gray-400 md:px-2 px-1 rounded cursor-pointer"
                >
                  -
                </button>
                <span className="text-[12px] md:text-[14px]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-gray-400 md:px-2 px-1 rounded cursor-pointer"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="font-medium text-[12px] md:text-[14px]">
                  ₹ {item.quantity * item.price}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-sm mt-1 text-[12px] md:text-[14px] cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-500 pt-4 text-right">
          <p className=" font-md">Total Quantity: {totalQuantity}</p>
          <p className=" font-md">Total: ₹ {totalAmount}</p>
        </div>
      </div>
    </>
  );
};

export default cart;

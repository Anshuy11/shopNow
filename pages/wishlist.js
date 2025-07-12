import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlistItem, addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/router";

const WishlistFunc = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);

  const handleToggleWishlist = (product) => {
    dispatch(toggleWishlistItem(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center p-10 text-gray-600">
         Wishlist is empty 🥲
      </div>
    );
  }

  return (
    <>
     <div className="min-h-screen  px-4 py-6 sm:py-10">
      <h1 className="text-3xl font-bold mb-6 text-center ">
        My Wishlist ❤️
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => {
          const isInCart = cart?.some((cartItem) => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-xl p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:shadow-xl hover:-translate-y-1 "
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mb-4 cursor-pointer items-center"
                onClick={() => router.push(`/products/${item.id}`)}
              />
              <h2 className="text-lg font-semibold text-center line-clamp-2">
                {item.title}
              </h2>
              <p className=" mt-2">₹{item.price}</p>

              <div className="mt-4 flex gap-2">
                {isInCart ? (
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                   Item in Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                )}
                <button
                  onClick={() => handleToggleWishlist(item)}
                  className="text-red-600 px-3 py-2 text-xl hover:scale-110 transition-transform"
                  title="Remove from Wishlist"
                >
                  ❤️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
   
  );
};

export default WishlistFunc;

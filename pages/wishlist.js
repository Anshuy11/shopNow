import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlistItem, addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/router";
import PathBackButton from "@/components/PathBackButton";
import { AuthContext } from "@/context/AuthContext";
import Head from "next/head";

const WishlistFunc = () => {
  const dispatch = useDispatch();
  const router = useRouter();
    const { user } = useContext(AuthContext);
  const cart = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);

  const handleToggleWishlist = (product) => {
    dispatch(toggleWishlistItem(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if(Object?.keys(user)?.length==0 ){
     return (
      <div className="text-center p-10 ">
       Please login to view wishlist ❤️.
      </div>
    );
  }

  

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center p-10 ">
         Wishlist is empty 🥲
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>{"ShopNow - Your Smart Shopping Destination."}</title>
        <meta
          name="description"
          content={
            "ShopNow is a modern e-commerce app built with Next.js, Tailwind CSS, Redux, and Context API for fast, seamless shopping with cart persistence and theming."
          }
        />
        <link rel="canonical" href="https://shop-now-chi.vercel.app/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" type="image/png" sizes="32x32" href="headLogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="headLogo.png" />
        <meta
          property="og:title"
          content={"ShopNow - Your Smart Shopping Destination."}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            "ShopNow is a modern e-commerce app built with Next.js, Tailwind CSS, Redux, and Context API for fast, seamless shopping with cart persistence and theming."
          }
        />
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="NOODP" />
        <meta property="og:url" content="https://shop-now-chi.vercel.app/" />
        <meta property="og:image" content="headLogo.png" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
     <div className="">
         <PathBackButton />
      <h1 className="lg:text-3xl text-xl font-bold mb-6 text-center ">
        My Wishlist ❤️
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => {
          const isInCart = cart?.some((cartItem) => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm  flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
                <div onClick={() => router.push(`/products/${item.id}`)} className="flex flex-col items-center "> <img
                src={item.images[0]}
                alt={item.title}
                className="h-40 object-contain mb-4 cursor-pointer"
                
              />
              <h2 className="lg:text-md text-sm text-center line-clamp-2">
                {item.title}
              </h2>
              <p className=" mt-2">₹{item.price}</p></div>
             

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
                  className="text-red-600 px-3 py-2 text-sm bg-red-100 rounded-lg  hover:scale-110 transition-transform  cursor-pointer"
                  title="Remove from Wishlist"
                >
                  Remove
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

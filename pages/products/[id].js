import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "@/redux/cartSlice";
import PathBackButton from "@/components/PathBackButton";
import Loader from "@/components/Loader";
import Head from "next/head";
import MessageFunc from "@/components/MessageModal";
import WishlistButton from "@/components/WishlistButton";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [openMessage, setOpenMessage] = useState(false);

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const isInCart = cart?.find((item) => item.id === Number(id));


  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  
 

  if (loading) return <Loader />;
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>
          {
            "ShopNow - Your Smart Shopping Destination."
          }
        </title>
        <meta
          name="description"
          content={
            "ShopNow is a modern e-commerce app built with Next.js, Tailwind CSS, Redux, and Context API for fast, seamless shopping with cart persistence and theming."
          }
        />
        <link rel="canonical" href="https://portfolios-dusky.vercel.app/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />
        <meta
          property="og:title"
          content={
            "ShopNow - Your Smart Shopping Destination."
          }
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
        <meta
          property="og:url"
          content="https://portfolios-dusky.vercel.app/"
        />
        <meta property="og:image" content="favicon.ico" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <PathBackButton />
         <MessageFunc
          message={message}
          setMessageOpen={setOpenMessage}
          messageOpen={openMessage}
          onClose={() => setOpenMessage(false)}
        />
      <div className="p-8 max-w-3xl mx-auto min-h-screen">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-[300px]  object-contain mb-6"
        />
        <h1 className="lg:text-xl text-sm font-semibold lg:font-bold mb-4">{product.title}</h1>
        <p className="lg:text-lg text-sm mb-2">₹{product.price}</p>
        <p className="text-sm lg:text-md mb-6">{product.description}</p>
        <div className="flex gap-4 justify-between">
          {isInCart ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-800 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Add
            </button>
          )}
         <WishlistButton product={product}  />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

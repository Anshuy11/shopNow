import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "@/redux/cartSlice";
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";
import SignInUpLofinForm from "./SignInUpLofinForm";

const WishlistButton = ({ product }) => {
  const [signupLoginopen, setSignupLoginopen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const wishlistItems = useSelector((state) => state.cart.wishlistItems);
  const isWishlisted = wishlistItems?.some((item) => item.id === product.id);

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlistItem(product));
  };

  return (
    <>
      <SignInUpLofinForm setOpen={setSignupLoginopen} open={signupLoginopen} />

      {Object?.keys(user)?.length > 0 ? (
        <button
          onClick={handleToggleWishlist}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-all duration-200 hover:scale-105  `}
        >
          <span className="text-xl cursor-pointer">
            {isWishlisted ? "❤️" : <FaRegHeart className="text-gray-400" />}
          </span>
        </button>
      ) : (
        <div
          onClick={() => setSignupLoginopen(true)}
          className="text-xl cursor-pointer"
        >
          <FaRegHeart className="text-gray-400" />
        </div>
      )}
    </>
  );
};

export default WishlistButton;

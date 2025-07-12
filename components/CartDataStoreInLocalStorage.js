import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart, calculateTotals } from "@/redux/cartSlice";

const CartDataStoreInLocalStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          
          // Ensure wishlist properties exist, even if they're not in localStorage
          const cartWithWishlist = {
            cartItems: parsed.cartItems || [],
            totalQuantity: parsed.totalQuantity || 0,
            totalAmount: parsed.totalAmount || 0,
            wishlistItems: parsed.wishlistItems || [], // Add this
            totalWishlistItems: parsed.totalWishlistItems || 0, // Add this
          };
          
          dispatch(hydrateCart(cartWithWishlist));
          dispatch(calculateTotals());
        } catch (e) {
          console.error("Failed to parse cart from localStorage", e);
        }
      }
    }
  }, [dispatch]);

  return null;
};

export default CartDataStoreInLocalStorage;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  wishlistItems: [],
  totalWishlistItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    hydrateCart(state, action) {
      return action.payload;
    },

    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveToLocalStorage(state); 
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      cartSlice.caseReducers.calculateTotals(state);
      saveToLocalStorage(state); 
    },

    increaseQuantity(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      cartSlice.caseReducers.calculateTotals(state);
      saveToLocalStorage(state); 
    },

    decreaseQuantity(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
      cartSlice.caseReducers.calculateTotals(state);
      saveToLocalStorage(state); 
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      saveToLocalStorage(state); 
    },

    calculateTotals(state) {
      let quantity = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        amount += item.quantity * item.price;
      });
      state.totalQuantity = quantity;
      state.totalAmount = parseFloat(amount.toFixed(2));
    },

    // New Wishlist Actions (only additions)
    addToWishlist(state, action) {
      const item = action.payload;
      const existingItem = state.wishlistItems.find((i) => i.id === item.id);

      if (!existingItem) {
        state.wishlistItems.push(item);
        state.totalWishlistItems = state.wishlistItems.length;
        saveToLocalStorage(state);
      }
    },

    removeFromWishlist(state, action) {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
      state.totalWishlistItems = state.wishlistItems.length;
      saveToLocalStorage(state);
    },

    toggleWishlistItem(state, action) {
      const item = action.payload;
      const existingItem = state.wishlistItems.find((i) => i.id === item.id);

      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter(
          (i) => i.id !== item.id
        );
      } else {
        state.wishlistItems.push(item);
      }
      
      state.totalWishlistItems = state.wishlistItems.length;
      saveToLocalStorage(state);
    },

    clearWishlist(state) {
      state.wishlistItems = [];
      state.totalWishlistItems = 0;
      saveToLocalStorage(state);
    },
  },
});

const saveToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: state.cartItems,
          totalQuantity: state.totalQuantity,
          totalAmount: state.totalAmount,
          wishlistItems: state.wishlistItems,
          totalWishlistItems: state.totalWishlistItems,
        })
      );
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }
};

export const {
  hydrateCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  calculateTotals,
  addToWishlist,
  removeFromWishlist,
  toggleWishlistItem,
  clearWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cart-items";

const initialState = {
  cartItems,
  noOfItems: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotal: (state) => {
      let totalAmount = 0;
      let noOfItems = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount * item.price;
        noOfItems += item.amount;
      });
      state.totalAmount = totalAmount;
      state.noOfItems = noOfItems;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      if (!state.items.some(item => item.id === newItem.id)) {
        state.items.push(newItem);
      }
    },
    removeCart: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemToRemove.id);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addCart, removeCart, clearCart } = cartSlice.actions;


export default cartSlice.reducer;

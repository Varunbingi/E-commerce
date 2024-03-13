import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    card: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newCard = action.payload;
      if (!state.card.some(card => card.id === newCard.id)) {
        state.card.push(newCard);
      }
    },
    removeItem: (state, action) => {
      const CardToRemove = action.payload;
      state.card = state.card.filter(card => card.id !== CardToRemove.id);
    },
    clearItem: (state, action) => {
      state.card.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = favouriteSlice.actions;


export default favouriteSlice.reducer;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const item = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    changeItem: (state, action) => {
      return action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      name: "보송보송타월",
      price: 7900,
      quantity: 1,
      selected: false,
      imageUrl:
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item1.jpg",
    },
    {
      id: 2,
      name: "선데이백",
      price: 169000,
      quantity: 2,
      selected: false,
      imageUrl:
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item2.jpg",
    },
  ],
  reducers: {
    toggleSelection: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.selected = !item.selected;
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    removeSelectedItems: (state) => {
      return state.filter((item) => !item.selected);
    },
    removeAllItems: () => {
      return [];
    },
  },
});

export default configureStore({
  reducer: { item: item.reducer, cart: cart.reducer },
});

export const { changeItem } = item.actions;
export const {
  toggleSelection,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  removeSelectedItems,
  removeAllItems,
} = cart.actions;

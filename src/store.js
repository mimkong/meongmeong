import { configureStore, createSlice } from "@reduxjs/toolkit";

const item = createSlice({
  name: "item",
  initialState: [{}],
  reducers: {
    changeItem: (state, action) => {
      return action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    toggleSelection: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

      if (isConfirmed) {
        return state.filter((item) => item.id !== action.payload);
      }
    },
    removeSelectedItems: (state) => {
      const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

      if (isConfirmed) {
        return state.filter((item) => !item.selected);
      }
    },
    removeAllItems: () => {
      const isConfirmedAllItems = window.confirm("장바구니를 비우시겠습니까?");

      if (isConfirmedAllItems) {
        return [];
      }
    },
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

const user = createSlice({
  name: "user",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      return { ...state, isLoggedIn: true };
    },
    logout: (state) => {
      const isConfirmed = window.confirm("로그아웃 하시겠습니까?");

      if (isConfirmed) {
        return { ...state, isLoggedIn: false };
      }
    },
  },
});

export default configureStore({
  reducer: { item: item.reducer, cart: cart.reducer, user: user.reducer },
});

export const { changeItem } = item.actions;
export const {
  toggleSelection,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  removeSelectedItems,
  removeAllItems,
  addItem,
  selectedItems,
} = cart.actions;
export const { login, logout } = user.actions;

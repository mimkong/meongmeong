import { configureStore, createSlice } from "@reduxjs/toolkit";

let item = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    changeItem: (state, action) => {
      state = action.payload;
    },
  },
});

export default configureStore({
  reducer: { item: item.reducer },
});

export let { changeItem } = item.actions;

import { configureStore, createSlice } from "@reduxjs/toolkit";

let item = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    changeItem: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export default configureStore({
  reducer: { item: item.reducer },
});

export let { changeItem } = item.actions;

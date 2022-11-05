import { createSlice } from "@reduxjs/toolkit";

export type SliceState = {
  items: IItems;
};

export interface IItems {
  [key: string] : {
    id: string;
    content: string;
  }
}

const initialState: SliceState = {
  items: {},
};

export const DashSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = DashSlice.actions;

export default DashSlice.reducer;

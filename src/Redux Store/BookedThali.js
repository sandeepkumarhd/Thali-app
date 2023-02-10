import { createSlice } from "@reduxjs/toolkit";

const bookedSlice = createSlice({
  name: "bookedThali",
  initialState: { totalItem: 0, totalPrice: 0 },
  reducers: {
    bookedThaliHandeer(state, action) {
      const bookedData = action.payload;
      state.totalPrice = bookedData.totalPrice
      state.totalItem = bookedData.totalItem

    },
  },
});

export const bookedThaliActions = bookedSlice.actions;
export default bookedSlice;


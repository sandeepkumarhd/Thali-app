import { createSlice } from "@reduxjs/toolkit";

const yourThaliSlice = createSlice({
  name: "thali",
  initialState: { thaliItem: [], totalThaliItemPrice: 0 },
  reducers: {
    addItemToThali(state, action) {
      const newItem = action.payload;
      const existingThaliItem = state.thaliItem.find(
        (item) => item.id === newItem.id
      );
      if (existingThaliItem) {
        alert("You Already have this item in your Thali...!");
      } else {
        state.thaliItem.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quentity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    increesItems(state, action) {
      let id = action.payload;
      const filterdItem = state.thaliItem.find((item) => item.id === id);
      if (!filterdItem.quentity) {
        // state.thaliItem = state.thaliItem.filter((item) => item.id !== id);
      } else {
        filterdItem.quentity++;
        filterdItem.totalPrice += filterdItem.price;
      }
    },
    removeItem(state,action){
        let id = action.payload;
        const filterdItem = state.thaliItem.find((item) => item.id === id);
        if (filterdItem.quentity===1) {
          state.thaliItem = state.thaliItem.filter((item) => item.id !== id);
        } else {
          filterdItem.quentity--;
          filterdItem.totalPrice -= filterdItem.price;
        }
    }
  },
});
export const thaliActions = yourThaliSlice.actions;
export default yourThaliSlice;

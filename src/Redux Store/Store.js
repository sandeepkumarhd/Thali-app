import { configureStore } from "@reduxjs/toolkit";
import yourThaliSlice from "./yourThaliStore";
import bookedSlice from "./BookedThali";

const store = configureStore({
    reducer:{
        thali:yourThaliSlice.reducer,
        bookedThali:bookedSlice.reducer
    }
})
export default store;
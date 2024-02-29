import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "../store/slices/nftSlice";

export const store = configureStore({
  reducer: {
    nft: nftReducer,
  },
});

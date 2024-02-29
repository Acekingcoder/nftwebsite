import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NFTState {
  nfts: NFT[];
}

interface NFT {}

const initialState: NFTState = {
  nfts: [],
};

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    addNFT: (state, action: PayloadAction<NFT>) => {
      state.nfts.push(action.payload);
    },
  },
});

export const { addNFT } = nftSlice.actions;

export default nftSlice.reducer;

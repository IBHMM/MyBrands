import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {TakeUserWishList} from '../Home/Datafetch'

const initialState = {
  wishlist: await TakeUserWishList(),
  visitedPages: ["Ana səhifə"],
  card: [],
  name: "Ibrahim",
  loading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.wishlist = state.wishlist.filter(product => product.id !== action.payload.id);
    },
    setPages: (state, action) => {
      if (!state.visitedPages.includes(action.payload)) {
        state.visitedPages.push(action.payload);
      }
    },
    setCard: (state, action) => {
      state.card.push(action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  }
});

export const { addProduct, removeProduct, setPages, setCard, setName } = userSlice.actions;

export default userSlice.reducer;

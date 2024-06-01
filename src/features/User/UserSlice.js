import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TakeUserCard, TakeUserWishList } from '../Home/Datafetch';

// Async thunks for fetching data
export const fetchUserCard = createAsyncThunk(
  'user/fetchUserCard',
  async () => {
    const userCard = await TakeUserCard();
    return userCard;
  }
);

export const fetchUserWishList = createAsyncThunk(
  'user/fetchUserWishList',
  async () => {
    const wishList = await TakeUserWishList();
    return wishList;
  }
);

const initialState = {
  wishlist: [],
  userCard: [],
  visitedPages: ["Ana səhifə"],
  name: "",
  loading: false,
  error: null,
  ActiveProduct: {},
  gender: "",
  address: [],
  orders: [],
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
    addProducttocard: (state, action) => {
      state.userCard.push(action.payload);
    },
    UpdateProductcard: (state, action) => {
      const index = state.userCard.findIndex(order => order.id === action.payload.id);
      state.userCard[index] = action.payload;
    },
    removeProductfromcard: (state, action) => {
      state.userCard = state.userCard.filter(product => product.id !== action.payload.id);
    },
    resetCard: (state) => {
      state.userCard = [];
    },
    setPages: (state, action) => {
      if (!state.visitedPages.includes(action.payload)) {
        state.visitedPages.push(action.payload);
      }
    },
    setOrder: (state, action) => {
      state.orders = action.payload;
    },
    AddOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setCard: (state, action) => {
      state.card.push(action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAdr: (state, action) => {
      state.address = action.payload;
    },
    setProduct: (state, action) => {
      state.ActiveProduct = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserCard.fulfilled, (state, action) => {
        state.loading = false;
        state.userCard = action.payload;
      })
      .addCase(fetchUserCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(fetchUserWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  resetCard, setOrder, AddOrder, addProduct, removeProduct, setPages, setCard, setName,
  setProduct, addProducttocard, removeProductfromcard, UpdateProductcard, setGender, setAdr
} = userSlice.actions;

export default userSlice.reducer;

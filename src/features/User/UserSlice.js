import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist : [],
    wisitedpages :["Ana səhifə"],
    card : [],
    name: "Ibrahim",
}

export const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        SetWishlist : (state, action) => {
           state.wishlist = action.payload
        },
        AddProduct : (state, action) => {
            const newlist = [...state.wishlist, action.payload]
            state.wishlist = newlist
        },
        SpliceWishList : (state, action) => {
            const newwishlist = state.wishlist.filter(product => product.id !== action.payload)
            state.wishlist = newwishlist
        },
        SetPages : (state, action) => {
            if(state.wisitedpages[state.wisitedpages != action.payload]) {
                state.wisitedpages = [...state.wisitedpages, action.payload]
            }
        },
        SetCard : (state, action) => {
            state.card = [...state.card, action.payload]
        },
        setName : (state, action) => {
            state.name = action.payload
        }
    },
})


export const { SetCard, SetPages, SetWishlist, setName, SpliceWishList } = user.actions

export default user.reducer

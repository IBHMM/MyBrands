import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist : [],
    wisitedpaces : [],
    card : []
}

export const user = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
        SetWishlist : (state, action) => {
            state.wishlist = [...state.wishlist, action.payload]
        },
        SetPages : (state, action) => {
            state.wisitedpaces = [...state.wisitedpaces, action.payload]
        },
        SetCard : (state, action) => {
            state.card = [...state.card, action.payload]
        }
    },
})

export const { SetCard, SetPages, SetWishlist } = user.actions

export default user.reducer

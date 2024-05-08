import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist : [],
    wisitedpages :["Ana səhifə"],
    card : [],
    name: "Ibrahim",
}

export const user = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
        SetWishlist : (state, action) => {
            state.wishlist = [...state.wishlist, action.payload]
        },
        SetPages : (state, action) => {
            state.wisitedpages = [...state.wisitedpages, action.payload]
        },
        SetCard : (state, action) => {
            state.card = [...state.card, action.payload]
        },
        setName : (state, action) => {
            state.name = action.payload
        }
    },
})

export const { SetCard, SetPages, SetWishlist, setName } = user.actions

export default user.reducer

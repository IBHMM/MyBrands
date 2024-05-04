import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CategoryType: "",
    menu: false
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        setCategoryType: (state, action) => {
            state.CategoryType = action.payload
        },
        setMenu: (state, action) => {
            state.menu = action.payload
        }
    },
})

export const { setCategoryType, setMenu } = homeSlice.actions;

export default homeSlice.reducer;

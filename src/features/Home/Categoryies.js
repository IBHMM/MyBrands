import { createSlice } from '@reduxjs/toolkit';
import { TakeBrands, TakeCategories } from './Datafetch';

const initialState = {
    ActiveCategory: null,
    AllCategories: TakeCategories(),
    Brands: TakeBrands(),
    menu: false
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        ActiveCategory: (state, action) => {
            state.ActiveCategory = action.payload
            console.log(action.payload)
        },
        setMenu: (state, action) => {
            state.menu = action.payload
        },
    },
})

export const { ActiveCategory, setMenu } = homeSlice.actions;

export default homeSlice.reducer;

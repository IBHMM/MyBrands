import { createSlice } from '@reduxjs/toolkit';
import { TakeBrands, TakeCategories } from './Datafetch';

const initialState = {
    ActiveCategory: {},
    AllCategories: await TakeCategories(),
    Brands: await TakeBrands(),
    menu: false
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        ActiveCategory: (state, action) => {
            state.ActiveCategory = action.payload
        },
        setMenu: (state, action) => {
            state.menu = action.payload
        }
    },
})

export const { ActiveCategory, setMenu } = homeSlice.actions;

export default homeSlice.reducer;

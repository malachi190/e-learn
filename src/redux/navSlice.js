import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: false
}

export const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {
        open: (state) => {
            state.val = state.val
        }, 
        close: (state) => {
            state.val = !state.val
        }
    }
})

export const {open, close} = navSlice.actions;

export default navSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
        //Delete
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload),
                1
            )
        },
        deleteProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
        //update
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex(item => item._id === action.payload.id)
            ] = action.payload.product;
        },
        updateProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
        //Create
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
        },
        addProductFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductFailure, deleteProductSuccess,
    updateProductStart, updateProductFailure, updateProductSuccess,
    addProductStart, addProductFailure, addProductSuccess
} = productSlice.actions;

export default productSlice.reducer;
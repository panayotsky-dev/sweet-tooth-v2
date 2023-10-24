import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'testSlice1',
    ready:false,
    description:[''],
}
export const pizzaSlice = createSlice({
    name:'pizza',
})
import { configureStore } from "@reduxjs/toolkit";
import { pizzaSlice } from "./Slices/pizzaSlice";

export const store = configureStore(
    {
        reducer:{
            pizza:pizzaReducer,
            initialState,
            reducers:{
                changeReady: (state) => {
                    state.ready = !state.ready
                },
                addDescription:(state,action)=>{
                    state.description = [...state.description, action.payload]
                },
            }
        },
    }
)

export const {changeReady,addDescription} = pizzaSlice.actions
export default pizzaSlice.reducer

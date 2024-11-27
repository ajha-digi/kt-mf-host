import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./demoSlice"

const store = configureStore({
    reducer : {
        demo : demoReducer
    }
})

export {store}
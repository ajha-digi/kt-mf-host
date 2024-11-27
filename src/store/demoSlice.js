import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    data: [1,2,3,4]
}

const demoSlice = createSlice({
    name:"demo-host",
    initialState,
    reducers:{
        getData: (state, actions) => {
            return state;
        }
    }
});

export const {getData} =  demoSlice.actions;
export default demoSlice.reducer;
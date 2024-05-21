import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: null,
};

const extraSlice = createSlice({
    name: "extraSlice",
    initialState,
    reducers: {
        saveClassType: (state, { payload }) => {
            state.type = payload;
        },
    },
});

export const { saveClassType } = extraSlice.actions;
export const reduxClassType = (state) => state.extraSlice.type;

export default extraSlice.reducer;

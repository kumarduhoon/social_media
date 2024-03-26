import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../action/authAction"

const initialState = {
    loading: false,
    userInfo: [],
    userToken: null,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false,
                    state.userInfo = action.payload
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default authSlice.reducer
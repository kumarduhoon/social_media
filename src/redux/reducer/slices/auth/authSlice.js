import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../../action/authAction"
import isEmpty from "is-empty";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userInfo: [],
    userToken,
    error: null,
    isAuthenticated: userToken ? true : false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.userToken = action.payload.userToken
            state.isAuthenticated = !isEmpty(action.payload.userToken)
            state.error = null
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.error = null
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
    }
})
export default authSlice.reducer
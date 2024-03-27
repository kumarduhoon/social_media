import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"
import authHeader from "../../authHeader"
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("https://api.freeapi.app/api/v1/users/register", data, authHeader())
        console.log(response, "+++")
        return response
    } catch (error) {
        if (error.response && error.response.data.message) {
            // errorNotify(error.response.data.message)
            return error.response.data.message
        } else {
            // errorNotify(error.response.data.message)
            return error.message
        }
    }
})

export const loginUser = createAsyncThunk("user/login", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("https://api.freeapi.app/api/v1/users/login", data, authHeader())
        if (response?.data.statusCode === 200 && response?.data.success === true) {
            localStorage.setItem('userToken', response?.data?.data?.accessToken)
            toast.success(response?.data.message)
            return response?.data
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
            toast.error(error.response.data.message)
            return rejectWithValue(error.response.data.message)
        } else {
            toast.error(error.message)
            return rejectWithValue(error.message)
        }
    }
})
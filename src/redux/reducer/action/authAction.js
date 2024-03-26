import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"
import authHeader from "../../authHeader"

export const registerUser = createAsyncThunk("auth/register", async (data) => {
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
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getData = createAsyncThunk("data/getData" , async (arg , {rejectWithValue})=>{
    try {
       const {data}  = await axios.get("https://dummyjson.com/products")
        return data

    } catch (error) {
        rejectWithValue(error.response.data)
    }
})
const initialState = {
    data : [],
    isSuccess : false,
    message : "",
    loading : false
}

const dataSlice = createSlice({

    name : "data" ,
    initialState,
    reducers : {

    },

    extraReducers: {
        [getData.pending] : (state , {payload})=>{
            state.loading = true ;
        },
        [getData.fulfilled] : (state , {payload})=>{
            state.loading = false ;
            state.data = payload ;
            state.isSuccess = true ;
        },
        [getData.rejected] : (state , {payload})=>{
            state.loading = false ;
            state.message = payload ;
            state.isSuccess = false
        },
    }
})

export default dataSlice ;
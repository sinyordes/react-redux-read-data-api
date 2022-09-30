import {createSlice} from "@reduxjs/toolkit";  //5

import {createAsyncThunk} from "@reduxjs/toolkit";
///////////API CONNECT//////////////////////////

export const dataDownload=createAsyncThunk('download/dataDownload/',async ()=>{
    const response = await fetch('http://osman.sinyordes.xyz/device_ids/device_x1/json.php');
    return await response.json();
})



////////////////////////////////////////////////
export const dataSlice = createSlice({
    name:'veriler',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    reducers:{
        addData:(state, action)=>{
            state.data.push(action.payload)
        }
    },
    extraReducers:{
        [dataDownload.pending]:(state,action)=>{
        state.isLoading=true
        },
        [dataDownload.fulfilled]:(state,action)=>{
        state.data=action.payload
        state.isLoading=false
        },
        [dataDownload.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        }
    }


});
export const {addData} = dataSlice.actions;
export default dataSlice.reducer;
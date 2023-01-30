import { createSlice } from "@reduxjs/toolkit";

export const dataSlice=createSlice({
    name:'data',
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            const data={
            key:Math.random(),
            img:action.payload.setNewImage,
            }
            state.push(data);
        },
        deleteData:(state,action)=>{
            return state.filter((data)=>data.key!==action.payload.key)
        },

    }
});

export const {addData,deleteData}=dataSlice.actions;
export default dataSlice.reducer;
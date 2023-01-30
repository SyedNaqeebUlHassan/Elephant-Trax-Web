import { createSlice } from "@reduxjs/toolkit";

export const keywordSlice =createSlice({
    name:'keyword',
    initialState:[],
    reducers:{
        addKeyword:(state,action)=>{
            const keywordData={
                key:Math.random(),
                kewword:action.payload.setNewKeyword,
            }
            state.push(keywordData);
        },
        deleteKeyword:(state,action)=>{
            return state.filter((keywordData)=>keywordData.key!==action.payload.key)
        },
    }
})
export const {addKeyword,deleteKeyword}=keywordSlice.actions;
export default keywordSlice.reducer;
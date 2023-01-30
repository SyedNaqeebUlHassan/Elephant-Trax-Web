import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"
import keywordReducer from './keywordSlice';
export const store =configureStore({
    reducer:{dataSlice:dataReducer,keywordSlice:keywordReducer},
});
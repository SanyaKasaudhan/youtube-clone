import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults: (state, action) =>{
            //{"ip": ["iphone","iphone11"]}
            state={...action.payload, ...state}
        }
    }
})







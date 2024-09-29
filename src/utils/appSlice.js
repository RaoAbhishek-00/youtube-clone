import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen : true,
    },
    reducers:{
        toogleMenu: (state, action) =>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closemenu : (state)=>{state.isMenuOpen=false},
    }
})

export default appSlice.reducer;
export const {toogleMenu, closemenu} = appSlice.actions;
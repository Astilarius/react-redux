import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { RootState } from "../../app/store";

interface User{
    id: number,
    name: string,
}

const initialState = [
    {id:0, name:"Ruslan"},
    {id:1, name:"Astilarius"},
    {id:2, name:"Astilorius"},
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state:RootState) => state.users

export default usersSlice.reducer
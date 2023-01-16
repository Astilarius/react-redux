import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { nanoid } from "@reduxjs/toolkit";

interface Post{
    id: string,
    title:string,
    content:string,
}

const initialState: Post[] = [
    {id:"1", title:'Learning Redux Toolkit', content:"I'm learning Redux!"},
    {id:"2", title:'Slices', content:"The more i say slice, the more i want pizza"},
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
            state.push(action.payload)
            }, 
            prepare(title:string, content:string) {
                return {
                    payload : {
                        id:nanoid(),
                        title,
                        content,
                    }
                }
            }
        }
    }
})

export const { postAdded } = postsSlice.actions

export const selectAllPosts = (state:RootState) => state.posts

export default postsSlice.reducer
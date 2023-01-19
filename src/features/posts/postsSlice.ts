import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { nanoid } from "@reduxjs/toolkit";

interface Emotes{
    [index: string]:number,
    "thumbsUp":number,
    "thumbsDown":number,
    "angryFace":number,
    "loveFace":number,
}

export interface Post{
    id: string,
    title:string,
    content:string,
    author: string,
    emotes: Emotes,
}

const initialEmotes:Emotes = {thumbsUp:0, thumbsDown:0, angryFace:0, loveFace:0}

const initialState: Post[] = [
    {id:"1", title:'Learning Redux Toolkit', content:"I'm learning Redux!", author: "me", emotes:initialEmotes},
    {id:"2", title:'Slices', content:"The more i say slice, the more i want pizza", author: "me", emotes:initialEmotes},
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
            state.push(action.payload)
            }, 
            prepare(title:string, content:string, author:string, emotes=initialEmotes) {
                return {
                    payload : {
                        id:nanoid(),
                        title,
                        content,
                        author,
                        emotes,
                    }
                }
            }
        },
        reactionAdded(state, action){
            const { postId, emote } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost){
                existingPost.emotes[emote]++;
            }
        }
    }
})

export const { postAdded, reactionAdded } = postsSlice.actions

export const selectAllPosts = (state:RootState) => state.posts

export default postsSlice.reducer
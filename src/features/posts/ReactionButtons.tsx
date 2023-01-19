import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { reactionAdded } from "./postsSlice";
import type { Post } from './postsSlice'
import './reactions.css'
import animeLike from '../../images/rindothumb-discord-emoji-emojis-for-discord-anime-manga-comics-book-helmet-transparent-png-915570.png'

const emotesObject = {
    thumbsUp:animeLike,
    thumbsDown:"https://cutewallpaper.org/24/discord-emoji-png/discord-emojis-transparent-hd-png-download-kindpng.png",
    angryFace:"https://avatars.mds.yandex.net/i?id=0adb4efa0c1073d6ced2a6def9242cc8413365ee-8263325-images-thumbs&n=13",
    loveFace:"https://avatars.mds.yandex.net/i?id=a565b6b7d2ebedcb5f93b8ba26a62141c250010b-7025773-images-thumbs&n=13"
}

const PostEmotes:React.FC<Post> = (post:Post) => {
    const dispatch = useAppDispatch();


    const emotes = Object.entries(emotesObject).map(([name, emote]) =>{
        return (
            <div className="emote">
                <button
                    key={name}
                    type="button"
                    className="reactionButton"
                    onClick={() => 
                        dispatch(reactionAdded({postId: post.id, emote: name}))
                    }>
                    <img src={emote} width={45}></img> 
                    <span>{post.emotes[name]}</span>
                </button>
            </div>
        )
    } )
    return <div>{emotes}</div>
}

export default PostEmotes
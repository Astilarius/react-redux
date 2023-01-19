import { selectAllPosts } from "./postsSlice";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import PostEmotes from './ReactionButtons'
import React from 'react';
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts)
    const dispatch = useAppDispatch();

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <em>by {post.author}</em><br/>
            { PostEmotes(post) }
        </article>
    ))
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList
import { selectAllPosts } from "./postsSlice";
import { useAppSelector } from "../../app/hooks";
import React from 'react';

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
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
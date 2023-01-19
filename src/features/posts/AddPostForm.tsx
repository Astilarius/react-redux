import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postAdded } from "./postsSlice";
import "./addPostForm.css"

const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const onTitleChanged = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}
    const onAuthorChanged = (e:ChangeEvent<HTMLInputElement>) => {setAuthor(e.target.value)}
    const onContentChanged = (e:ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)}

    const onSavePostClicked = (e:FormEvent) => {
        if (title && content && author){
            dispatch(
                postAdded(title, content, author)
            )
        }
    }

    return (
        <section>
            <h2>Add a new Post</h2>
            <form className="addPostForm">
                <label htmlFor="postTitle">Post Title:</label><br/>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /><br/>
                <label htmlFor="postContent">Content:</label><br/>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /><br/>
                <label htmlFor="postAuthor">Author:</label><br/>
                <input
                    type="text"
                    id="postAuthor"
                    name="postAuthor"
                    value={author}
                    onChange={onAuthorChanged}
                /><br/>
                <button type="button" onClick={onSavePostClicked}>Save post</button>
            </form>
        </section>
    )
}

export default AddPostForm
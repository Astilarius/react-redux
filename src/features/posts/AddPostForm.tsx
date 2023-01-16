import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}
    const onContentChanged = (e:ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)}

    const onSavePostClicked = (e:FormEvent) => {
        if (title && content){
            dispatch(
                postAdded(title,content)
            )
        }
    }

    return (
        <section>
            <h2>Add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>Save post</button>
            </form>
        </section>
    )
}

export default AddPostForm
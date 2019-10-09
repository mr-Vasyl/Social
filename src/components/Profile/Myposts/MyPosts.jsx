import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post massage={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.onAddPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.post}>
                <div><textarea onChange={onPostChange} ref={newPostElement} rows="5" cols="100" name="text"
                               value={props.newPostText}></textarea></div>
                <div><input onClick={onAddPost} type="submit" value="Add post"></input></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


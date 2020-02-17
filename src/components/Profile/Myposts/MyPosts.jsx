import React from 'react';
import {Field, reduxForm, reset} from "redux-form";

import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {textarea} from "../../Common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(50);

const MyPosts = React.memo(props => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map((p) => <Post key={p.id} massage={p.message} likesCount={p.likesCount}/>)
    // let newPostElement = React.createRef();
    let onAddPost = (values, dispatch) => {
        props.onAddPost(values.newPostText)
        dispatch(reset('ProfileAddNewPostForm'))
    }

    return (
        <div className={s.myPosts}>
            <img alt="backgroundProfile" className={s.backgroundProfile}
                 src={window.location.origin + '/background.jpg'}/>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={textarea}
                       placeholder='post message'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button className={s.btn + " " + s.transition}>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;


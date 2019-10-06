import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts updateNewPostTextActionCreator={onPostChange} onAddPost={onAddPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;


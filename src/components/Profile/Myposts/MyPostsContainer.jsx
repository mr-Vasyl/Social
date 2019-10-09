import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';
import {sendMessageCreator, updadeNewMessageBodyCreator} from "../../../Redux/DialogsReducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updadeNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))

    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


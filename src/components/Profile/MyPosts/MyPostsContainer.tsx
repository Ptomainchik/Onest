import { connect } from 'react-redux';
import { actions, ProfileReducerType } from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import { AppStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType ={
    profilePage: ProfileReducerType
}

type MapDispatchPropsType = {
    addPost: (message: string) => void
    addLikes: (likes: number, id: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
      posts: state.profilePage.posts
    }
  }

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(actions.addPostActionCreator(newPostText))
        },
        addLikes: (likes: number, id: string) => {
            dispatch(actions.addLikes(likes, id))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;


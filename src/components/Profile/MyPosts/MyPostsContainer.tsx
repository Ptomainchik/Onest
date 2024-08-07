import { connect } from 'react-redux';
import { actions } from '../../../redux/profileReducer';
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts";
import { AppStateType } from '../../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts
  }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostActionCreator}) (MyPosts);

export default MyPostsContainer;



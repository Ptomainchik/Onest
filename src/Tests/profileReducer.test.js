import profileReduser, { addPostActionCreator, deletePost } from "../redux/profileReducer";

let state = {
  posts: [
      {id: 1, message:"Hi, how are you?", likesCount: "13"},
      {id: 2, message:"It's my first post", likesCount: "32"}]
  }

it("length of posts should be incremented", () =>  {
  let action = addPostActionCreator("vseHorosho!!!");

  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe (3);
})

it("message of new post should be correct", () =>  {
  let action = addPostActionCreator("vseHorosho!!!");
  
  let newState = profileReduser(state, action);

  expect(newState.posts[2].message).toBe ("vseHorosho!!!");
})

it("after deliting length should be decrement", () =>  {
  let action = deletePost(1);
  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe(1)
})

it("after deliting length should't be decrement if id is incorrect", () =>  {
  let action = deletePost(1000);
  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe(2)
})
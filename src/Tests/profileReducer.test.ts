import profileReduser, { actions } from "../redux/profileReducer";

let state = {
  posts: [
      {id: 1, messages:"Hi, how are you?", likesCount: 13},
      {id: 2, messages:"It's my first post", likesCount: 32}
    ],
      profile: null,
      status: ""  
  }

it("length of posts should be incremented", () =>  {
  let action = actions.addPostActionCreator("vseHorosho!!!");

  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe (3);
})

it("message of new post should be correct", () =>  {
  let action = actions.addPostActionCreator("vseHorosho!!!");
  
  let newState = profileReduser(state, action);

  expect(newState.posts[2].messages).toBe ("vseHorosho!!!");
})

it("after deliting length should be decrement", () =>  {
  let action = actions.deletePost(1);
  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe(1)
})

it("after deliting length should't be decrement if id is incorrect", () =>  {
  let action = actions.deletePost(1000);
  
  let newState = profileReduser(state, action);

  expect(newState.posts.length).toBe(2)
})
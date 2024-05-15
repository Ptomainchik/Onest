const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Alexander" },
    { id: 4, name: "Viktoria" },
    { id: 5, name: "Zinaida" }
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Privet" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Zdraste" },
    { id: 5, message: "Yo" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({ id: state.messages.length + 1, message: state.newMessageBody }),
        newMessageBody: ""
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (body) => ({ type: SEND_MESSAGE, body });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;
import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number,
  name: string
}

type MessageType = {
  id: number,
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Alexander" },
    { id: 4, name: "Viktoria" },
    { id: 5, name: "Zinaida" },
    { id: 6, name: "Georgich" }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Privet" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Zdraste" },
    { id: 5, message: "Yo" }
  ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND-MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 3, message: body}]
      }
    default:
      return state;
  }
};

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({ type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody } as const) 
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
import { FormAction } from "redux-form";
import { chatAPI, ChatMessageApiType, StatusType } from "../api/ChatApi";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { Dispatch } from "redux";
import {v1} from "uuid"


let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
}

const chatReduser = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case "SN/CHAT/MESSAGES_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...actions.payload.messages.map(m => ({...m, id: v1()}))]
                .filter((m, index, array) => index >= array.length - 100)
            }
            case "SN/CHAT/STATUS_CHANGET":
            return {
                ...state,
                status: actions.payload.status
            }
        default:
            return state  
    }
}

export const actions = { 
    messagesReceived: (messages: ChatMessageApiType[]) => ({
        type: "SN/CHAT/MESSAGES_RECEIVED", payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: "SN/CHAT/STATUS_CHANGET", payload: {status}
    } as const)
}


let _newMessageHandler: ((messages: ChatMessageApiType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
        dispatch(actions.messagesReceived(messages))
}}
return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
        dispatch(actions.statusChanged(status))
}}
return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe("messages-received",newMessageHandlerCreator(dispatch))
    chatAPI.subscribe("status-changed",statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe("messages-received",newMessageHandlerCreator(dispatch))
    chatAPI.subscribe("status-changed",statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
    
}


export default chatReduser;



export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
type ChatMessageType = ChatMessageApiType & {id: string}


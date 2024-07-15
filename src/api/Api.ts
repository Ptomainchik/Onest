import axios from "axios";
import { UserType } from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "e550a630-6adb-4483-b731-d04a33277ffe"}
});





export enum ResultCodesEnum {
   Success = 0,
   Error = 1,
}

export enum ResultCodeForCaptchaEnum {
   CaptchaIsRequired = 10
}


export type GetItemsType = {
   items: Array<UserType>
   totalCount: number
   error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
   data: D
   messages: Array<string>
   resultCode: RC
}
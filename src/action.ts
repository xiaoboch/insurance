import { createAction } from "redux-actions";
import { IUser } from "./types";

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const saveUserInfo = createAction<IUser>(SAVE_USER_INFO);

export const EDIT_USER_INFO = 'EDIT_USER_INFO';
export const editUserInfo = createAction(EDIT_USER_INFO);


import { createAction } from "redux-actions";
import { IUser, IInsurancePlan } from "./types";

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const saveUserInfo = createAction<IUser>(SAVE_USER_INFO);

export const EDIT_USER_INFO = 'EDIT_USER_INFO';
export const editUserInfo = createAction(EDIT_USER_INFO);

export const SELECTE_INSURANCE_PLAN = 'SELECT_INSURANCE_PLAN';
export const selectInsurancePlan = createAction<{plankey: string, plan: IInsurancePlan}>(SELECTE_INSURANCE_PLAN);


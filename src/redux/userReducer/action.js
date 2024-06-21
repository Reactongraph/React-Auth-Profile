import {
  UPDATE_USER_PROFILE,
  CLEAR_USER_PROFILE,
  REGISTER_USER_PROFILE,
  LOGIN_USER_PROFILE,
} from "./types";

export const updateUserProfile = (updatedData) => ({
  type: UPDATE_USER_PROFILE,
  payload: updatedData,
});

export const clearUserProfile = () => ({
  type: CLEAR_USER_PROFILE,
});

export const registerUserData = (data) => ({
  type: REGISTER_USER_PROFILE,
  payload: data,
});

export const loginUserData = (data) => ({
  type: LOGIN_USER_PROFILE,
  payload: data,
});

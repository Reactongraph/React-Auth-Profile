import {
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  CLEAR_USER_PROFILE,
  REGISTER_USER_PROFILE,
} from "./types";

export const setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  payload: profileData,
});

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

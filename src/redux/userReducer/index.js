import {
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  CLEAR_USER_PROFILE,
  REGISTER_USER_PROFILE,
} from "./types";

const initialState = {
  userProfile: null,
  userData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload,
        },
      };
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: null,
      };
    case REGISTER_USER_PROFILE:
      return {
        ...state,
        userData: [...state?.userData, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;

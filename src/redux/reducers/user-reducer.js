import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_INITIATED,
    REGISTER_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_INITIATED,
    LOGIN_USER_ERROR,
  } from '../actions/types';
  
  const initialState = {
    registerUserSuccess: false,
    registerUserError: {},
    loading: false,
    isLoggedIn: false,
    loginUserError: {},
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          registerUserSuccess: action.payload,
          loading: false,
        };
      case REGISTER_USER_INITIATED:
        return {
          ...state,
          loading: action.payload,
        };
      case REGISTER_USER_ERROR:
        return {
          ...state,
          registerUserError: action.payload,
          loading: false,
        };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          isLoggedIn: action.payload,
          loading: false,
        };
      case LOGIN_USER_INITIATED:
        return {
          ...state,
          loading: action.payload,
        };
      case LOGIN_USER_ERROR:
        return {
          ...state,
          loginUserError: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
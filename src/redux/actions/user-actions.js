import { toast } from 'react-toastify';
import {
  registerUserSuccess,
  registerUserInitiated,
  registerUserError,
  loginUserSuccess,
  loginUserInitiated,
  loginUserError,
} from './actionCreators';

import axiosInstance from '../config/axiosInstance';

export const registerUser = postData => dispatch => {
  toast.dismiss();
  dispatch(registerUserInitiated(true));
  axiosInstance
    .post('api/v1/auth/signup', postData)
    .then((response) => {
      dispatch(registerUserSuccess(true));
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(registerUserError(error.response.data.message));
      toast.error(error.response.data.message, { autoClose: false, hideProgressBar: true });
    });
};

export const loginUser = postData => dispatch => {
  toast.dismiss();
  dispatch(loginUserInitiated(true));
  axiosInstance
    .post('api/v1/auth/login', postData)
    .then((response) => {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user_email', postData.email);
      dispatch(loginUserSuccess(true));
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(loginUserError(error.response.data.message));
      toast.error(error.response.data.message, { autoClose: false, hideProgressBar: true });
    });
};

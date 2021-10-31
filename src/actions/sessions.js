import AuthService from "./auth.service";
import Cookies from "universal-cookie";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { toast } from "react-toastify";
import { COOKIE_FIELD_NAME } from "../util/config";

const cookies = new Cookies();
const ck_field = COOKIE_FIELD_NAME;

function login(userN, pwd) {
  return (dispatch) =>
    AuthService.login(userN, pwd)
      .then((res) => {
        if (res && res.data.status === 200) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: res.data },
          });
          toast.success(res.data.message)
          
          localStorage.setItem("user", JSON.stringify(res.data));
          sessionStorage.setItem("user", JSON.stringify(res.data));
          cookies.set(ck_field, res.data.accessToken, { path: "/" });
        }
        if (res && res.data.status === 202) {
          dispatch({ type: LOGIN_FAIL });
          toast.warn(res.data.message)
        }
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAIL });
        toast.error("Something went wrong..")
      });
    }
    
    function signup(userN, pwd) {
      return (dispatch) =>
      AuthService.register(userN, pwd)
      .then((res) => {
        if (res && res.data.status === 200) {
          dispatch({ type: REGISTER_SUCCESS });
          toast.success(res.data.message)
        }
        if (res && res.data.status === 202) {
          dispatch({ type: REGISTER_FAIL });
          toast.warn(res.data.message)
        }
      })
      .catch((_) => {
        dispatch({ type: REGISTER_FAIL });
        toast.error("Something went wrong..")
      });
}

function logout() {
  return (dispatch) => {
    AuthService.logout();
    dispatch({ type: LOGOUT });
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    cookies.remove(ck_field);
  };
}

function checkIfLoggedIn() {
  return (dispatch) => {
    const activeSession = JSON.parse(sessionStorage.getItem("user"));
    if (activeSession) {
      AuthService.getSessionUser().then((res) => {
        if (res.data && res.data.user) {
          if (res.data.user.userId === activeSession.user.userId)
            dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data,
            });
        } else {
          dispatch({ type: LOGIN_FAIL });
          localStorage.removeItem("user");
          cookies.remove(ck_field);
        }
      });
    }
  };
}

const logger = {
  login,
  logout,
  signup,
  checkIfLoggedIn,
};

export default logger;

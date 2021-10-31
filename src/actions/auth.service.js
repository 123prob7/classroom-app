import axios from "axios";
import authHeader from "./auth.header";
import { API_AUTH_URL } from "../util/config";

const API_URL = API_AUTH_URL;

const AuthService = {
  login: async (username, password) => {
    return axios.post(API_URL + "login", {
      username,
      password,
    });
  },

  logout: async () => {
    return axios.delete(API_URL + "logout");
  },

  register: async (username, password) => {
    return axios.post(API_URL + "signup", {
      username,
      password,
    });
  },

  getSessionUser: async () => {
    const sessionUser = sessionStorage.getItem("user")
    return axios.get(API_URL, { token: authHeader(), sessionUser });
  },
};

export default AuthService;

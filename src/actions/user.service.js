import axios from "axios";
import { toast } from "react-toastify";
import authHeader from "./auth.header";
import { API_CLASS_URL } from "../util/config";

const API_URL = API_CLASS_URL;

export function getClassesData() {
  return axios.get(API_URL, { token: authHeader() });
}

export async function createNewClass(className, section) {
  return axios.post(API_URL, { token: authHeader(), className, section }).then((res) => {
    if (res.data.status === 200) {
      toast.success(res.data.message);
    }
    return res;
  });
}

//WARNING: this will wipe out all classes
export function deleteAllClass() {
  return axios.delete(API_URL + "delete");
}

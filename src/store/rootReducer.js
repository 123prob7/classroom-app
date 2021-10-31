import { combineReducers } from "redux";
import rootURL from "./reducers/rootURL";
import session from "./reducers/session";

export default combineReducers({
  rootURL,
  session,
});

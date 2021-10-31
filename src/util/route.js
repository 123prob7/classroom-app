import { Redirect, Route } from "react-router-dom";
import { rootUrl } from "../util/config";

export function AuthRoute({ isLoggedIn, path, component: Component }) {
  return <Route path={path} render={(props) => (isLoggedIn ? <Redirect to={`${rootUrl}/class`} /> : <Component {...props} />)} />;
}

export function ProtectedRoute({ isLoggedIn, path, component: Component }) {
  return <Route path={path} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to={`${rootUrl}/login`} />)} />;
}

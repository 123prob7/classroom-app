import { Redirect, Route } from "react-router-dom";

export function AuthRoute({ isLoggedIn, path, component: Component }) {
  return <Route path={path} render={(props) => (isLoggedIn ? <Redirect to="/class" /> : <Component {...props} />)} />;
}

export function ProtectedRoute({ isLoggedIn, path, component: Component }) {
  return <Route path={path} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
}

import React, { useEffect } from "react";
import Classroom from "./ClassManagement/Classroom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import act from "../actions/sessions";
import { AuthRoute, ProtectedRoute } from "../util/route";
import { useDispatch, useSelector } from "react-redux";
import { UnexpectedComponent } from "./404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainRoute() {
  const isLoggedIn = useSelector((state) => state.session.isLoggedIn);
  const { url } = useRouteMatch();

  const dispatch = useDispatch();
  dispatch(act.checkIfLoggedIn());

  // call on component initially mounted
  useEffect(() => {
    dispatch({ type: "create_root_url", payload: url });
  }, []);

  return (
    <div>
      <Switch>
        <ProtectedRoute isLoggedIn={isLoggedIn} path={`${url}/class`} component={() => <Classroom />} />
        <AuthRoute isLoggedIn={isLoggedIn} path={`${url}/signup`} component={Signup} />
        <AuthRoute isLoggedIn={isLoggedIn} path={`${url}/login`} component={Login} />
        <Route path={`${url}/404`} component={UnexpectedComponent} />
        <Redirect from={`${url}/*`} to={`${url}/404`} />
      </Switch>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

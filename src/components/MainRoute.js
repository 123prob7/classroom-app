import React, { useEffect } from "react";
import Classroom from "./ClassManagement/Classroom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Redirect, Route, Switch } from "react-router-dom";
import act from "../actions/sessions";
import { AuthRoute, ProtectedRoute } from "../util/route";
import { useDispatch, useSelector } from "react-redux";
import { UnexpectedComponent } from "./404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainRoute() {
  const isLoggedIn = useSelector((state) => state.session.isLoggedIn);
  const rootUrl = useSelector((state) => state.rootURL.url);

  const dispatch = useDispatch();
  dispatch(act.checkIfLoggedIn());

  // call on component initially mounted
  useEffect(() => {
    dispatch({ type: "create_root_url" });
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <ProtectedRoute isLoggedIn={isLoggedIn} path={`${rootUrl}/class`} component={() => <Classroom />} />
        <AuthRoute isLoggedIn={isLoggedIn} path={`${rootUrl}/signup`} component={Signup} />
        <AuthRoute isLoggedIn={isLoggedIn} path={`${rootUrl}/login`} component={Login} />
        <Route path={`${rootUrl}/404`} component={UnexpectedComponent} />
        <Redirect exact path={`${rootUrl}/`} to={`${rootUrl}/login`} />
        <Redirect from={`${rootUrl}/*`} to={`${rootUrl}/404`} />
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

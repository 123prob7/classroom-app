import React from "react";
import Classroom from "./ClassManagement/Classroom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import act from "../actions/sessions";
import { AuthRoute, ProtectedRoute } from "../util/route";
import { useDispatch, useSelector } from "react-redux";
import { UnexpectedComponent } from "./404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainRoute() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();
  dispatch(act.checkIfLoggedIn());

  return (
    <Router>
      <Switch>
        <ProtectedRoute isLoggedIn={isLoggedIn} path={["/class"]} component={() => <Classroom />} />
        <AuthRoute isLoggedIn={isLoggedIn} path="/signup" component={Signup} />
        <AuthRoute isLoggedIn={isLoggedIn} path={["/login"]} component={Login} />
        <Route path={"/404"} component={UnexpectedComponent} />
        <Redirect from="*" to="/404" />
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
    </Router>
  );
}

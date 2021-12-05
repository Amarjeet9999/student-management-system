import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Components/HomePage/HomePage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Login } from "../Components/Login/Login";
import { StudentDB } from "../Components/StudentDashboard/StudentDB";
import { AdminDB } from "../Components/AdminDashboard/AdminDB";
import { SignUp } from "../Components/SignUp/SignUp";
import { PrivateRoutes } from "./PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { loginLoading, loginSuccess } from "../Redux/Auth/Actions";

export const Routes = () => {
  const [show, setShow] = React.useState(false);
  const [showReg, setShowReg] = React.useState(false);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(loginLoading());
    const data = localStorage.getItem("user-st-m");
    if (data !== null) {
      const action = dispatch(loginSuccess(JSON.parse(data)));
      dispatch(action);
    }
  }, []);

  return (
    <>
      <Navbar setShow={setShow} setShowReg={setShowReg} />
      {show && <Login setShow={setShow} />}
      {showReg && <SignUp setShowReg={setShowReg} />}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <PrivateRoutes path="/app">
          {role === "student" && <StudentDB />}
          {role === "admin" && <AdminDB />}
        </PrivateRoutes>
      </Switch>
      <Footer />
    </>
  );
};

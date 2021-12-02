import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Components/HomePage/HomePage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Login } from "../Components/Login/Login";
import { StudentDB } from "../Components/StudentDashboard/StudentDB";
import { AdminDB } from "../Components/AdminDashboard/AdminDB";

export const Routes = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Navbar setShow={setShow} />
      {show && <Login setShow={setShow} />}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/app">
          <StudentDB />
          <AdminDB />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

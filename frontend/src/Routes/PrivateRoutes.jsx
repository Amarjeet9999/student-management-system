import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoutes = ({
  redirectPath = "/",
  path,
  children,
  exact = false,
}) => {
  const data = localStorage.getItem("user-st-m");
  return data ? (
    <Route to={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
};

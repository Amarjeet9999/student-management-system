import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Components/HomePage/HomePage";
import { Navbar } from "../Components/Navbar/Navbar";

export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};

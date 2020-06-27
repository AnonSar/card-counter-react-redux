import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    );
  }
}

export default MainRouter;

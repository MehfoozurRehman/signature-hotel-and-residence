import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const HomeScreen = lazy(() => import("Screens/HomeScreen"));
export default class App extends Component {
  render() {
    return (
      <Suspense fallback={"hello"}>
        <Router>
          <Switch>
            <Route>
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

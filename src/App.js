import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));
const WelcomeScreen = lazy(() => import("./Screens/WelcomeScreen"));
const ServicesScreen = lazy(() => import("./Screens/ServicesScreen"));
const LocationScreen = lazy(() => import("./Screens/LocationScreen"));
export default class App extends Component {
  render() {
    return (
      <Suspense fallback={"hello"}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <WelcomeScreen />
            </Route>
            <Route path="/home">
              <HomeScreen />
            </Route>
            <Route path="/services">
              <ServicesScreen />
            </Route>
            <Route path="/location">
              <LocationScreen />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

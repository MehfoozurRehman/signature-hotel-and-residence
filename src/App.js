import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Screens/AboutUsScreen";
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));
const WelcomeScreen = lazy(() => import("./Screens/WelcomeScreen"));
const ServicesScreen = lazy(() => import("./Screens/ServicesScreen"));
const LocationScreen = lazy(() => import("./Screens/LocationScreen"));
const ConstructionUpdateScreen = lazy(() =>
  import("./Screens/ConstructionUpdateScreen")
);
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
            <Route path="/construction_update">
              <ConstructionUpdateScreen />
            </Route>
            <Route path="/about-us">
              <AboutUsScreen />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

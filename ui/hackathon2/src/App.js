import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WrappedMap } from "./Components/Maps";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <div
          className="container-fluid"
          style={{
            width: "100vw",
            height: "400px"
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/map">
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyArHRXuAs4tM0oXKav83g1111dMLBwK7oM`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </Route>
              {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

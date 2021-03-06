import React from "react";
import "./App.css";
import { WrappedMap } from "./Components/Maps";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Components/Main/Main";
import Sidecomp, { LocationContext } from "./Components/SideMenu/Sidecomp";
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Nav />
      <div className="container-fluid App">
        <div
          className="row sm-collapse"
          style={{
            width: "100%",
            height: "500px",
            marginTop: 20,
          }}
        >


          <Router>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>

              <Route exact path="/map">


                <WrappedMap className="col-6"
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyArHRXuAs4tM0oXKav83g1111dMLBwK7oM`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div class="col-10" style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />


                <Sidecomp />
              </Route>


              {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
            </Switch>
          </Router>
         <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {WrappedMap} from './Components/Maps'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav';

function App() {
  return (
    <>
    <Nav />
    <div className="App">
      <div className="container-fluid" style= {{
        width: '100vw',
        height:'400px'
    }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyArHRXuAs4tM0oXKav83g1111dMLBwK7oM`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
    </div>
    </>
  );
}

export default App;

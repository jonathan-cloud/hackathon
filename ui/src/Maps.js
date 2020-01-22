import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


const Maps = () => {


  return (
    <GoogleMap 
      
      defaultZoom={10}
      defaultCenter={{
        lat: 32.073730,
        lng: 34.775744

      }}
    />
  )
}

export default Maps
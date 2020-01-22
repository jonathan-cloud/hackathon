import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import 'react-bootstrap'
import Sidecomp from './SideMenu/Sidecomp'



const Maps = () => {
  const [selected, setSelected] = useState(null)
  const locations = [
    {
      lat: 32.081533,
      lng: 34.786206,
      type: 'paper'

    }, {
      lat: 32.074460,
      lng: 34.777640,
      type: 'paper'

    }, {
      lat: 32.077983,
      lng: 34.788889,
      type: 'paper'
    }, {
      lat: 32.058095,
      lng: 34.781054,
      type: 'paper'
    }


  ]


  return (
  
    <GoogleMap

      defaultZoom={12}
      defaultCenter={{
        lat: 32.073730,
        lng: 34.775744

      }}
    >

      {locations.map(res => (

        <Marker
          icon={{
            url: 'https://cdn2.vectorstock.com/i/1000x1000/58/41/man-throwing-trash-into-dust-bin-icon-isolated-vector-25035841.jpg',
            scaledSize: new window.google.maps.Size(20, 20)
          }}
          position={{
            lat: res.lat,
            lng: res.lng
          }}

          onClick={() => {
            setSelected(res)

          }}
        />
      ))}

      {selected &&
        <InfoWindow
          position={{
            lat: selected.lat,
            lng: selected.lng
          }}
          onCloseClick={() => {
            setSelected(null)

          }}
        >
          <div>{selected.type}</div>
        </InfoWindow>
      }
     
    </GoogleMap>
    
  )

}

export const WrappedMap = withScriptjs(withGoogleMap(Maps))


export default Maps
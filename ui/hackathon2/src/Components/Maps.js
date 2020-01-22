import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import 'react-bootstrap'

const locations = [
  {
    lat:  32.058095,
    lng: 34.781054

  }]

const Maps = () => {
  const [selected, setSelected] = useState(false)

  return (

    <GoogleMap

      defaultZoom={14}
      defaultCenter={{
        lat: 32.073730,
        lng: 34.775744

      }}
    >
      <Marker
        icon={{
          url: 'https://cdn2.vectorstock.com/i/1000x1000/58/41/man-throwing-trash-into-dust-bin-icon-isolated-vector-25035841.jpg',
          scaledSize: new window.google.maps.Size(20, 20)
        }}
        position={{
          lat: 32.058095, lng: 34.781054

        }}

        onClick={() => {
          setSelected(true)
        }}
      />

      <Marker position={{
        lat: 32.081427, lng: 34.768358

      }} />
      {selected &&
        <InfoWindow
          position={{
            lat: 32.058095,
            lng: 34.781054
          }}
          onCloseClick={()=>{
            setSelected(null)
          }}
        >
          <div>hey</div>
        </InfoWindow>
      }
    </GoogleMap>

  )

}

export const WrappedMap = withScriptjs(withGoogleMap(Maps))


export default Maps
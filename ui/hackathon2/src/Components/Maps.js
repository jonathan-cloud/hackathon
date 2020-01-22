import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import 'react-bootstrap'



const Maps = () => {
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
    }

  ]
  const [selected, setSelected] = useState(false)

  return (

    <GoogleMap

      defaultZoom={14}
      defaultCenter={{
        lat: 32.073730,
        lng: 34.775744

      }}
    >

      {locations.map(res => (
        
        <Marker
          position={{
            lat: res.lat,
            lng: res.lng
          }}

        />
      ))}

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
          onCloseClick={() => {
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
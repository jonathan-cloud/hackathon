import React, { useState,Context, useEffect } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import 'react-bootstrap'






const Maps = () => {
  
  
  const [selected, setSelected] = useState(null)
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitutde] = useState()
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
    
    },


  ]

  useEffect (()=>{
    navigator.geolocation.getCurrentPosition(geoSuccess)
    
  },[]) 

  const geoSuccess = (position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    setLatitude(position.coords.latitude)
    setLongitutde(position.coords.longitude)
    
  }

  return (
    <>
    
    <GoogleMap

      defaultZoom={12}
      defaultCenter={{
        lat: 32.073730,
        lng: 34.775744

      }}
    >
      <Marker
        icon={{
          url: 'https://camo.githubusercontent.com/4b5a493a8346e986854a13cb65c74f499ae0ec52/687474703a2f2f7777772e323730746f77696e2e636f6d2f656c65637465642d6f6666696369616c732f696d67732f67656f6c6f636174652e706e67',
          scaledSize: new window.google.maps.Size(20, 20)
        }}
        position={{
          lat: latitude,
          lng: longitude
        }}
        
      >

      </Marker>
      
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
      
    </>
  )

}

export const WrappedMap = withScriptjs(withGoogleMap(Maps))


export default Maps
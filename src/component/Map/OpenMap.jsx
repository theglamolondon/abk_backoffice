import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import MapIcon from './icons';
import './Map.css'

const token = "pk.eyJ1IjoiZ2xhbW9sb25kb24iLCJhIjoiY2tudmtra2Q4MG5tazJwcnZhdTVoanA3NiJ9.uhDiwzTLS_BbPRv17_HBYg"

function OpenMap(props) {    
  const {data} = props
  console.log("children" ,props.children)
  return (
    <MapContainer center={[3.8306364,11.3703662]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //token={token}
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
      
        <MapPoint position={[33.5722108,-7.6580328]} icon={MapIcon.client} title="Client" />
        <MapPoint position={[33.5852674,-7.6038377]} icon={MapIcon.livreur} title="Livreur ABK" />
        <MapPoint position={[33.5852274,-7.6029377]} icon={MapIcon.resto} title="Restaurant" />
        {data.map( (point, k) =>  {
          return (point !== undefined && 
            <Marker position={point.position} icon={point.icon} key={k}>
              <Popup>{point.title}</Popup>
            </Marker>) 
        })}
      <LocationMarker />
  </MapContainer>)
}

function LocationMarker() {
    const [position, setPosition] = useState(null)
    
    const map = useMapEvents({
      //click() {
      //  map.locate()
      //},
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    map.locate()
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export function MapPoint(props) {
  return <React.Fragment />
}

export default OpenMap;
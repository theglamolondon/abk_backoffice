import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css'

const token = "pk.eyJ1IjoiZ2xhbW9sb25kb24iLCJhIjoiY2tudmtra2Q4MG5tazJwcnZhdTVoanA3NiJ9.uhDiwzTLS_BbPRv17_HBYg"

function OpenMap(props) {    
  const {data, location, handleMarkerClick, controls} = props

  return (
    <MapContainer center={[3.8306364,11.3703662]} zoom={13} scrollWheelZoom={false}>
      {controls}
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //token={token}
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
      
        {data.length && data.map( (point, k) =>  {
          return (point !== undefined && 
            <Marker position={point.position} icon={point.icon} key={k}>
              <Popup onOpen={() => {handleMarkerClick(point)}} >{point.title}</Popup>
            </Marker>) 
        })}
      <LocationMarker coordonnees={location} />
  </MapContainer>)
}

function LocationMarker({coordonnees}) {
    
    const map = useMapEvents({
      //click() {
      //  map.locate()
      //},
      locationfound(e) {
        if(coordonnees === null){
          map.flyTo(e.latlng, map.getZoom())
        }        
      },
    })

    if(coordonnees !== null){
      map.flyTo(coordonnees, map.getZoom())
    }else{
      map.locate()
    }
    return null
}

LocationMarker.defaultProps = {
  coordonnees: null,
}

export default OpenMap;
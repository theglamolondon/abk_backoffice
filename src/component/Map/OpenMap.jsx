import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css'
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

const token = "pk.eyJ1IjoiZ2xhbW9sb25kb24iLCJhIjoiY2tudmtra2Q4MG5tazJwcnZhdTVoanA3NiJ9.uhDiwzTLS_BbPRv17_HBYg"

function OpenMap(props) {    
  const {data, location, handleMarkerClick, controls, handleClickEvent} = props

  const [coordGps, setCoordGps] = useState(location);

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
            <Marker position={point.position} icon={point.icon} key={k}
              eventHandlers={{
                click: () => {handleMarkerClick(point)}
              }}
            >
              <Popup>{point.title}</Popup>
            </Marker>) 
        })}
      <LocationMarker 
        setCoordGps={setCoordGps} 
        coordonnees={coordGps} 
        clickEventHandler={handleClickEvent}
        locateEventHandler={handleClickEvent} 
        />
        
  </MapContainer>)
}

function LocationMarker({setCoordGps, coordonnees, clickEventHandler, locateEventHandler}) {
    let clickFlag = false

    const map = useMapEvents({
      click(e) {
        clickFlag = true
        clickEventHandler(e, map) //map.locate()
        setCoordGps(e.latlng)
      },
      locationfound(e) {
        if(coordonnees === null){
          map.flyTo(e.latlng, map.getZoom())
          locateEventHandler(e, map)
          setCoordGps(e.latlng)
          console.log("Found loaation")
        }        
      },
    })

    if(coordonnees !== null){
      map.flyTo(coordonnees, map.getZoom())
    }else if(!clickFlag){
      map.locate()
    }
    return null
}

LocationMarker.defaultProps = {
  coordonnees: null,
}
LocationMarker.propTypes = {
  getMapObject: PropTypes.func,
}

OpenMap.defaultProps = {
  handleClickEvent: ()=>{},
  handleMarkerClick: ()=>{},  
}
OpenMap.propTypes = {
  location: PropTypes.object,
  handleClickEvent: PropTypes.func,
  handleMarkerClick: PropTypes.func,
}

export default OpenMap;
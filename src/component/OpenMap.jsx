import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import './Map.css'
import home_client from './assets/home_client.png'
import resto_marker from './assets/resto_marker.png'
import livreur from './assets/livreur.png'

const token = "pk.eyJ1IjoiZ2xhbW9sb25kb24iLCJhIjoiY2tudmtra2Q4MG5tazJwcnZhdTVoanA3NiJ9.uhDiwzTLS_BbPRv17_HBYg"

function OpenMap({data}) {    
    return (
      <MapContainer center={[33.5724,-7.6570]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //token={token}
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
        />

        <Marker position={[33.5722108,-7.6580328]} icon={iconEmplacement}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        
        <Marker position={[33.5852274,-7.6029377]} icon={iconClient}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <LocationMarker />
    </MapContainer>)
}

const iconEmplacement = new L.Icon({
    iconUrl: resto_marker,
    iconRetinaUrl: resto_marker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

const iconClient = new L.Icon({
    iconUrl: home_client,
    iconRetinaUrl: home_client,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

export default OpenMap;
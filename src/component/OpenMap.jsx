import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


function OpenMap(params) {
    
    return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            accessToken="pk.eyJ1IjoiZ2xhbW9sb25kb24iLCJhIjoiY2tudmtra2Q4MG5tazJwcnZhdTVoanA3NiJ9.uhDiwzTLS_BbPRv17_HBYg"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    )
}

export default OpenMap;
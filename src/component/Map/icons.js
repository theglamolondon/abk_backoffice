import L from 'leaflet';

const iconResto = new L.Icon({
    iconUrl: '/assets/images/map/resto-marker-icon-2x.png',
    iconRetinaUrl: '/assets/images/map/resto-marker-icon-2x.png',
    iconAnchor: null,
    shadowAnchor: null,
    shadowRetinaUrl: null,
    shadowSize: null,
    iconSize: [35,35],
    className: 'abk-map-icon'
});

const iconClient = new L.Icon({
    iconUrl: '/assets/images/map/client-marker-icon-2x.png',
    iconRetinaUrl: '/assets/images/map/client-marker-icon-2x.png',
    iconAnchor: null,
    shadowAnchor: null,
    shadowRetinaUrl: null,
    shadowSize: null,
    iconSize: [35,35],
    className: 'abk-map-icon'
});

const iconLivreur = new L.Icon({
    iconUrl: '/assets/images/map/livreur-marker-icon-2x.png',
    iconRetinaUrl: '/assets/images/map/livreur-marker-icon-2x.png',
    iconAnchor: null,
    shadowAnchor: null,
    shadowRetinaUrl: null,
    shadowSize: null,
    iconSize: [35,35],
    className: 'abk-map-icon'
});

const MapIcon = {
    client: iconClient,
    resto : iconResto,
    livreur : iconLivreur,
}

export default MapIcon
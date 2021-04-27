import L from 'leaflet';

const iconResto = new L.Icon.Default({
    imagePath: '/assets/images/map/resto-'
});

const iconClient = new L.Icon.Default({
    imagePath: '/assets/images/map/client-'
});

const iconLivreur = new L.Icon.Default({
    imagePath: '/assets/images/map/livreur-'
});

const MapIcon = {
    client: iconClient,
    resto : iconResto,
    livreur : iconLivreur,
}

export default MapIcon
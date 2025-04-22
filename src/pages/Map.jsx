import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './Map.css'; 



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map and set its center and zoom level
    const map = L.map(mapContainer.current).setView([44.537884, 19.226878], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at the address location
    const marker = L.marker([44.537884, 19.226878]).addTo(map);
    marker.bindPopup('Ulica kneza Miloša 40/a, Loznica, Serbia');

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainer} className="map-container" />
  );
};

export default Map;

// App.jsx or MapComponent.jsx
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

function LayersControlComponent() {
    const map = useMap();

    useEffect(() => {
        // --- Base Layers ---
        const streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        });

        const satellite = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap'
        });

        // --- Overlay Layer ---
        const marker = L.marker([19.076, 72.8777]).bindPopup('Mumbai');
        const circle = L.circle([19.09, 72.88], {
            radius: 500,
            color: 'red'
        }).bindPopup('Circle Overlay');

        // --- Control ---
        const baseMaps = {
            'Streets': streets,
            'Satellite': satellite
        };

        const overlayMaps = {
            'Mumbai Marker': marker,
            'Circle': circle
        };

        // const control = L.control.layers(baseMaps, overlayMaps, {
        //   collapsed: false, // set to true to collapse control by default
        //   position: 'topright'
        // });

        const control = L.control.layers(baseMaps, {}, {
            collapsed: false, // set to true to collapse control by default
            position: 'topright'
        });

        control.addTo(map);

        // // Optional: Add base/overlay layers to map on init
        streets.addTo(map);   // Default base
        // marker.addTo(map);    // Default overlay

        return () => {
            map.removeControl(control);
        };
    }, [map]);

    return null;
}

export default LayersControlComponent;
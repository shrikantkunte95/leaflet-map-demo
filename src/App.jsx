import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './App.css'
import LocateButton from './pages/locationButton';
import LayersControlComponent from './pages/layerController';

function App() {
  //   function LocationMarker() {
  //   const [position, setPosition] = useState(null)
  //   const map = useMapEvents({
  //     click() {
  //       map.locate()
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng)
  //       map.flyTo(e.latlng, map.getZoom())
  //     },
  //   })

  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )
  // }
  const [position, setPosition] = useState([23.2546, 77.4048]);
  
  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={5} attributionControl={false} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>Hello from</Popup>
        </Marker>
        {/* <LocationMarker /> */}
        <LocateButton setPosition={setPosition} />
        <LayersControlComponent/>
      </MapContainer>
    </div>
  );
}

export default App;

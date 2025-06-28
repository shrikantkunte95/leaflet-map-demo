import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css'

function App() {
  const pos = [51.505, -0.09];                         // London
  return (
    <div className="map-wrapper">
      <MapContainer center={pos} zoom={13} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={pos}>
          <Popup>Hello from London!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;

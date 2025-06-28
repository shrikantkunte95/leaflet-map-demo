import { useMap } from 'react-leaflet';
import { FaLocationArrow } from "react-icons/fa";

function LocateButton({ setPosition }) {
  const map = useMap();

  const handleClick = () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 13);
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        bottom: 50,
        right: 20,
        display: 'flex',
        zIndex: 1000,
        padding: '8px 12px',
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: 4,
        cursor: 'pointer'
      }}
    >
      <FaLocationArrow style={{color: 'black'}} />
    </button>
  );
}

export default LocateButton;
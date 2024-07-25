import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";

const UpdateMap = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const CityMap = ({ city }) => {
  return (
    <div className="h-80 sm:h-96 xl:h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <MapContainer
        center={[city.lat, city.lon]}
        zoom={10}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap center={[city.lat, city.lon]} zoom={10} />
      </MapContainer>
    </div>
  );
};

export default CityMap;

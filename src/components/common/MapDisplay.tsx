import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../helper/initLeaflet';
import '../../styles/map.css';
import React from 'react';

const MapDisplay = React.memo(({
  name, latitude, longitude
}: {
  name: string, latitude: number, longitude: number
}) => {
  const position: LatLng = new LatLng(latitude, longitude);

  return (
    <MapContainer center={position} zoom={18}>
      <TileLayer
        attribution='© <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
        url='https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup className='popup'>{name}</Popup>
      </Marker>
    </MapContainer>
  );
});

MapDisplay.displayName = 'MapDisplay';

export default MapDisplay;
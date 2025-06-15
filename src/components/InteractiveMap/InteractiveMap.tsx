import { FC } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  MapContainerProps,
} from "react-leaflet";
import { LocationProps } from "./types";

type InteractiveMapProps = LocationProps & Partial<MapContainerProps>;

const InteractiveMap: FC<InteractiveMapProps> = ({
  latitude,
  longitude,
  popupLabel,
  ...rest
}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
      {...rest}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{popupLabel}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;

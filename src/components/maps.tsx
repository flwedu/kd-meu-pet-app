import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";

const containerStyle = {
  width: "20rem",
  height: "20rem",
};

const location = window.GeolocationCoordinates;

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Maps() {
  const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Maps);

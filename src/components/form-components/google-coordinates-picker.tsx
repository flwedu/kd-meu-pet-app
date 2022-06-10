import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";

type Location = {
  lat: number;
  lng: number;
};

const DefaultZoom = 10;
const salvadorCoordinates = {
  lat: -12.974722,
  lng: -38.476665,
};

function MapComponent(props: { spanText: string; onChange: (e: any) => void }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  const [map, setMap] = useState<null | google.maps.Map>(null);
  const [defaultLocation, setDefaultLocation] =
    useState<Location>(salvadorCoordinates);
  const [location, setLocation] = useState<Location | null>(null);
  const [zoom, setZoom] = useState<number>(DefaultZoom);

  function getCoordinatesFromGps() {
    return new Promise<Location>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) =>
          resolve({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }),
        (err) => reject(err)
      );
    });
  }

  // First
  const onLoad = useCallback(async function callback(map: google.maps.Map) {
    const coordinates = await getCoordinatesFromGps();
    setDefaultLocation(coordinates);
    setLocation(coordinates);

    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  // Last
  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  // Handle functions
  function handleMapClick(e: google.maps.MapMouseEvent) {
    if (e.latLng) {
      setLocation({
        lat: e.latLng?.lat()!,
        lng: e.latLng?.lng()!,
      });
    }
    props.onChange({
      currentTarget: {
        name: "location",
        value: location,
      },
    });
  }

  function handleResetClick() {
    setLocation(defaultLocation);
    setZoom(DefaultZoom);
  }

  return isLoaded ? (
    <div className="form-group">
      <span>{props.spanText}</span>
      <GoogleMap
        id="map"
        center={location ? location : defaultLocation}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick}
      >
        <Marker position={location ? location : defaultLocation} />
        <></>
      </GoogleMap>

      <button className="button" onClick={handleResetClick}>
        Resetar
      </button>
    </div>
  ) : (
    <></>
  );
}

const GoogleCoordinatesPicker = React.memo(MapComponent);
export { GoogleCoordinatesPicker };

import { useEffect, useState } from "react";
import MapPicker from "react-google-map-picker";

export function CoordinatesPicker(props: { onChange: (e: any) => void }) {
  const DefaultZoom = 10;
  // Brasilia location
  const DefaultLocation = { lat: -15.793889, lng: -47.882778 };

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  useEffect(getCoordinatesFromGps, []);

  function getCoordinatesFromGps() {
    navigator.geolocation.getCurrentPosition((location) => {
      setDefaultLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    }, onGpsError);
  }
  function onGpsError() {
    setLocation(defaultLocation);
  }

  function handleChangeLocation(lat: number, lng: number) {
    props.onChange({
      currentTarget: {
        name: "location",
        value: { lat: lat, lng: lng },
      },
    });
  }

  function handleChangeZoom(newZoom: number) {
    setZoom(newZoom);
  }

  function handleResetLocation(e: any) {
    e.preventDefault();
    getCoordinatesFromGps();
    setZoom(DefaultZoom);
  }

  return (
    <div>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        //@ts-ignore
        mapTypeId="roadmap"
        style={{ height: "25rem" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
      />
      <label>
        Latitude:
        <input className="input" type="text" value={location.lat} disabled />
      </label>
      <label>
        Longitude:
        <input className="input" type="text" value={location.lng} disabled />
      </label>
      <button onClick={handleResetLocation}>Resetar</button>
    </div>
  );
}

import React from "react";

import { LocationButton } from './MyLocationStyles';


const MyLocation = ({ setCenter, setMarker }) => {
  const findLocation = () => {
    if (!navigator.geolocation) {
      alert("Your location is not supported");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        if (setCenter) {
          setCenter(latitude, longitude);
        }

        if (setMarker) {
          setMarker(
            latitude,
            longitude,
            "My location",
            `lat:${latitude.toFixed(2)} lng:${longitude.toFixed(2)}`,
            
          );
        }
      },
      (error) => {
        alert("We are unable to find your location.");
      }
    );
  };

  return (
    <LocationButton onClick={() => findLocation()}>
        Find my location
    </LocationButton>
      
  );
};

export default MyLocation;

import React, { useEffect } from "react";

import { MapContainer } from "./MapQuestStyles";

const MapQuest = ({ height, width, center, tileLayer, zoom, apiKey }) => {
  useEffect(() => {
    //api key
    window.L.mapquest.key = apiKey;

    const map = window.L.mapquest.map("map", {
      center,
      layers: window.L.mapquest.tileLayer(tileLayer),
      zoom,
    });

    map.addControl(window.L.mapquest.control());
  }, []);

  return (
    <MapContainer>
      <div id="map" style={{ width, height }}>
        <p>Loading map...</p>
      </div>
    </MapContainer>
  );
};

export default MapQuest;

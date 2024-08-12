import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L, { popup } from "leaflet";

const InteractiveMap = ({ markerCoordinates }) => {
  const defaultIcon = L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [30, 30]
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        zoomControl: false,
        zoom: 14,
        minZoom: 10,
        center: [-2.6337316, 118.8840961]
      });

      L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }
      ).addTo(mapRef.current);

      L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

      if (Array.isArray(markerCoordinates)) {
        markerCoordinates.forEach(({ lat, lng, location, content }) => {
          const popup = L.popup().setContent(
            generatePopupContent(location, content)
          );
          L.marker([lat, lng], { icon: defaultIcon })
            .addTo(mapRef.current)
            .bindPopup(popup);
        });
      }
    }
  }, [markerCoordinates]);

  // STYLING POPUP HERE
  const generatePopupContent = (location, content) => {
    let popupContent = `<div class="popup-header"><h3>${location}</h3></div>`;

    content.forEach((item, i) => {
      if (item.popupContent && item.link) {
        popupContent += `<div class="popup-title"><h4>${item.popupTitle}</h4></div>`;
        popupContent += `<p class="popup-content">${item.popupContent}</p>`;
        }
    });

    return popupContent;
  };

  return <div id="map" className="rounded-3xl" style={{ width: "100%", height: "100vh" }}></div>;
};

export default InteractiveMap;

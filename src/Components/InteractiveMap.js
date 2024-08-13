import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(mapRef.current);

      L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

      if (Array.isArray(markerCoordinates)) {
        markerCoordinates.forEach(({ lat, lng, location, content }) => {
          const popupContent = generatePopupContent(location, content);
          L.marker([lat, lng], { icon: defaultIcon })
            .addTo(mapRef.current)
            .bindPopup(popupContent, {
              maxWidth: "auto",
              minWidth: 300
              // offset: [-20, 0]
            });
        });
      }
    }
  }, [markerCoordinates]);

  const generatePopupContent = (location, content) => {
    let popupContent = `
      <div class="w-max h-max max-w-lg max-h-lg">
        <div class="popup-header"><h3>${location}</h3></div>
    `;

    content.forEach((item) => {
      popupContent += `
        <img src="${item.imgLink}" class="popup-image" />
      `;
    });

    popupContent += `</div>`;
    return popupContent;
  };

  return (
    <div
      id="map"
      className="rounded-3xl w-full h-full md:h-screen lg:h-screen p-4"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};

export default InteractiveMap;

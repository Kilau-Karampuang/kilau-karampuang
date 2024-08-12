import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Image from "next/image";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("../../Components/InteractiveMap"),
  {
    ssr: false
  }
);

export default function Peta() {
  const markerCoordinates = [
    {
      lat: -2.2068836,
      lng: 117.9704262,
      location: "Marker 1",
      content: [
        {
          popupTitle: "Title 1",
          popupContent: "Content 1",
          link: "https://example.com"
        }
      ]
    },
    {
      lat: -3.2068836,
      lng: 118.9704262,
      location: "Marker 2",
      content: [
        {
          popupTitle: "Title 2",
          popupContent: "Content 2",
          link: "https://example.com"
        }
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero heading="Desa Karampuang" subheading="Eksplorasi Bersama" />
      <div className="p-24">
        <InteractiveMap markerCoordinates={markerCoordinates} />
      </div>
    </div>
  );
}

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
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
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-2xl font-montserrat">
          Peta <span className="font-bold">Wisata</span>
        </h1>
        <p className="hidden sm:block sm:text-lg font-montserrat mb-2 text-center">
          Jelajahi wisata Karampuang!
        </p>
      </div>
      <div className="p-24 pt-4">
        <InteractiveMap markerCoordinates={markerCoordinates} />
      </div>
    </div>
  );
}

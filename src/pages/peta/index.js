import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("../../Components/InteractiveMap"), {
  ssr: false,
});

export default function Peta() {
  const markerCoordinates = [
    {
      lat: -2.6226402, 
      lng: 118.8934955,
      location: "Goa Lidah",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1Ka4Rue_nTIf9SXaQmD0k_HrHah9IfS4H"
        }
      ]
    },
    {
      lat: -2.6425185, 
      lng: 118.8830697,
      location: "Goa Mimpi",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1K5q2xm-AY3zjzkyzyloWsSTmsLHSZucS"
        }
      ]
    },
    {
      lat: -2.62333, 
      lng: 118.89198,
      location: "Sumur Kapal",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1SerYJCIeMLDvO5tWLkwrrJgJ5hJ_Ni8j"
        }
      ]
    },
    {
      lat: -2.63279,  
      lng: 118.87948,
      location: "Sumur Jodoh",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=13FyXqmTdchleEU0BJCdaIStbE4ZmjYie"
        }
      ]
    },
    {
      lat: -2.6445591, 
      lng: 118.8899610,
      location: "Kuburan Islam Kuno",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1fRE0gluTCowbaJzscreqlRjXQVqaJ4kr"
        }
      ]
    },
    {
      lat: -2.6381809, 
      lng: 118.8796090,
      location: "Bujung Jampurung",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1Mxz5bpUGcOFNu3W9EznbebJeocWyU64A"
        }
      ]
    },
    {
      lat: -2.62329, 
      lng: 118.89430,
      location: "Dermaga Ujung Bulo Wisata",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=1vYth9hKWHOaQ65AnnZyGCR-pxGRGQbue"
        }
      ]
    },
    {
      lat: -2.630491,
      lng: 118.879800,
      location: "Batu Pute",
      content: [
        {
          imgLink: "https://drive.google.com/thumbnail?id=14IyqkTklybGGO5fGhKwjR00b1eMWpQ0m"
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
      <div className="p-4 sm:p-12 sm:pt-4">
        <InteractiveMap markerCoordinates={markerCoordinates} />
      </div>
    </div>
  );
}

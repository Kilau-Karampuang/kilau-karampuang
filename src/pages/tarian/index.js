import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import { useState } from "react";

const cardData = [
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon.",
    details: "Details about UMKM will be available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon.",
    details: "Details about UMKM will be available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon.",
    details: "Details about UMKM will be available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon.",
    details: "Details about UMKM will be available soon."
  },
];

export default function Tarian() {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Navbar />
      <Hero heading="Tarian Karampuang" subheading="Eksplorasi Bersama" />

      <div className="max-w-screen gap-2 grid grid-cols-12 grid-rows-5 px-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-3 hover:scale-105"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {card.heading}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={card.altText}
              className="z-0 w-full h-full object-cover"
              src={card.imageSrc}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">{card.title}</p>
                </div>
              </div>
              <Button radius="full" size="sm" onClick={() => openModal(card)}>
                Lihat Lebih Lanjut
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
              X
            </button>
            <div className="mb-4">
              <h2 className="text-xl font-bold">{selectedCard.heading}</h2>
            </div>
            <Image
              removeWrapper
              alt={selectedCard.altText}
              className="w-full h-auto mb-4 object-cover"
              src={selectedCard.imageSrc}
            />
            <p>{selectedCard.details}</p>
          </div>
        </div>
      )}
    </>
  );
}

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";

const cardData = [
  {
    imageSrc: "/cover-butta.png",
    altText: "Tari Butta Kalassukangku",
    title: "Tari Butta Kalassukangku",
    link: "https://youtu.be/D6JqtWEk6Y0"
  },
  {
    imageSrc: "/cover-lipa.png",
    altText: "Tari Lipa Sabbe",
    title: "Tari Lipa Sabbe",
    link: "https://youtu.be/mVjjLRLFOzc"
  },
  {
    imageSrc: "/cover-lita.png",
    altText: "Tari Lita Mandar",
    title: "Tari Lita Mandar",
    link: "https://youtu.be/wVjPXSmq4Ac"
  },
  {
    imageSrc: "/cover-tulolona.png",
    altText: "Tari Tulolona",
    title: "Tari Tulolona",
    link: "https://youtu.be/mNQYMaDYCAA"
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

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1] || url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <Navbar />
      <Hero heading="Tarian Karampuang" subheading="Eksplorasi Bersama" />

      <div className="max-w-screen px-8 flex flex-col gap-8 pb-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-3 hover:scale-105"
          >
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

      {visible && selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-[60%] w-full relative">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
              X
            </button>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-center">{selectedCard.title}</h2>
            </div>
            {selectedCard.link ? (
              <iframe
                width="560"
                height="315"
                src={getYoutubeEmbedUrl(selectedCard.link)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            ) : (
              <p>Video sedang diproses!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

import { Card, CardFooter, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LoadingContext } from "@/Context/LoadingContext";
import { toast } from "react-toastify";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import axios from "axios";

export default function Tarian() {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/tarian")
      .then((res) => {
        toast.success("Data tarian berhasil dimuat!"), {
          zIndex: 9999,
        };
        setCardData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Data tarian gagal dimuat!"), {
          zIndex: 9999,
        };
        setIsLoading(false);
      });
  }, []);

  const openModal = (card) => {
    setSelectedCard(card);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedCard(null);
  };

  const getYoutubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getYoutubeThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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
            <img
              alt={card.title}
              className="z-0 w-full h-full object-cover"
              src={getYoutubeThumbnailUrl(card.videoId)}
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
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              X
            </button>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-center">
                {selectedCard.title}
              </h2>
            </div>
            <iframe
              width="560"
              height="315"
              src={getYoutubeEmbedUrl(selectedCard.videoId)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

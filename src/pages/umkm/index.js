import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

const cardData = [
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon."
  },
  {
    imageSrc: "https://nextui.org/images/hero-card.jpeg",
    altText: "Woman listening to music",
    heading: "UMKM",
    title: "Available soon."
  },
];

export default function UMKM() {
  return (
    <>
      <Navbar />
      <Hero heading="UMKM Karampuang" subheading="Menelisik Bersama" />

      <div className="max-w-screen gap-2 grid grid-cols-12 grid-rows-5 px-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-3"
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
                  <p className="text-tiny text-white/60">{card.subtitle}</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Lihat Lebih Lanjut
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

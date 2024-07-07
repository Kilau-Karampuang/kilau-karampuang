import Heading from "@/Components/Heading";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import YouTubeEmbed from "@/Components/YoutubeEmbed";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

const cardData = [
  {
    imageSrc: "/Diving.png",
    altText: "Woman listening to music",
    heading: "Diving and Snorkeling",
    title: "Aktivitas"
  },
  {
    imageSrc: "/GoaLidah.png",
    altText: "Woman listening to music",
    heading: "Goa Lidah",
    title: "Wisata"
  },
  {
    imageSrc: "/SumurKapal.png",
    altText: "Woman listening to music",
    heading: "Sumur Kapal",
    title: "Wisata"
  },
];

export default function Wisata(){
    return (
        <>
            <Navbar />
            <Hero
                heading="Wisata Karampuang"
                subheading="Jelajahi Pesona"
                image="/Vector_S.png" />
            <Heading
                heading={<>Destinasi <b>Unggulan</b></>}
                subheading="Jelajahi berbagai tempat dan aktivitas tak terlupakan"
            />    
            <div className="max-w-screen mt-12 mb-40 lg:mx-40 gap-8 grid grid-cols-9 px-8">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        className="w-full h-80 col-span-12 sm:col-span-3"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-center pt-8">
                        <p className="text-white text-center text-2xl font-bold font-montserrat">
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
            <div className="flex justify-center">
                <YouTubeEmbed videoId="hRYZ_fCX_pk" />
            </div>
        </>
    )
}
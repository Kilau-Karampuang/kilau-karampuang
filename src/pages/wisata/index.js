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
            <p className="font-montserrat text-lg p-4 max-w-3xl mt-4 mb-20 text-center mx-auto">
                <b>Selamat datang di Pulau Karampuang,</b><br /> surga tersembunyi di Sulawesi yang menawarkan berbagai destinasi wisata yang menarik dengan pesona alam dan keindahan bawah laut yang memukau. 
                Nikmati petualangan diving dan snorkeling di perairan jernih yang penuh dengan terumbu karang dan kehidupan laut yang berwarna-warni. 
                Jelajahi Goa Lidah, formasi alami yang mempesona. 
                Temukan Sumur Kapal, sebuah fenomena alam unik di mana air laut menyusup ke daratan, menciptakan sumur alami yang menakjubkan. 
                Jangan lupa mengunjungi Sumur Jodoh, yang dipercaya membawa keberuntungan bagi para pencari cinta, 
                dan Sumur 3 Rasa, di mana Anda bisa merasakan keajaiban tiga rasa air yang berbeda dalam satu tempat. 
                Karampuang menanti Anda dengan segala pesonanya!
            </p> 
            <Heading 
                heading={<>Pesona <b>Wisata</b></>}
                subheading="Saksikan keindahan alam tersembunyi di Pulau Karampuang"
            />
            <div className="flex justify-center mt-10">
                <YouTubeEmbed videoId="hRYZ_fCX_pk" />
            </div>
            <Heading
                heading={<>Destinasi <b>Unggulan</b></>}
                subheading="Jelajahi berbagai tempat dan aktivitas tak terlupakan"
            />   
            <div className="max-w-screen mt-12 mb-40 lg:mx-40 gap-y-8 sm:gap-x-8 grid grid-cols-9 px-8">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        className="w-full mx-auto max-w-80 h-96 sm:h-80 col-span-12 sm:col-span-3 hover:scale-105"
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
        </>
    )
}
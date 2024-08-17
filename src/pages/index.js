import { Inter } from "next/font/google";
import YouTubeEmbed from "@/Components/YoutubeEmbed";
import Heading from "@/Components/Heading";
import Sponsor from "@/Components/Sponsor";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Image from "next/image";
import Map from "@/Components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero heading="Pulau Karampuang" subheading="Menyapa Indahnya" />
      <Gallery />
      {/* <div className="relative w-[180vw] md:w-[140vw] -ml-[20vw] h-56 bg-white">
        <Image
          className="absolute -top-40 py-24"
          src="/Highlight.png"
          alt="Gambar Highlith Karampuang"
          height={100}
          width={2000}
          priority
        />
      </div> */}
      <Heading
        className="mb-10 md:mt-24 pt-40"
        heading={
          <>
            Sebuah <b>Dokumenter</b>
          </>
        }
        subheading="Ikuti perjalanan kami menelusuri surga tersembunyi"
      />
      <YouTubeEmbed videoId="iyeE3pIMotc" />

      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 ${inter.className}`}
      >
        {/* Other Components Here */}
        <Map />
        <Sponsor />
      </main>
    </>
  );
}

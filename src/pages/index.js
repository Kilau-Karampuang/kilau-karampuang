import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Map from "@/Components/Map";
import Heading from "@/Components/Heading";
import YouTubeEmbed from "@/Components/YoutubeEmbed";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero heading ="Pulau Karampuang" subheading="Menyapa Indahnya" />
      <div className="relative w-[180vw] md:w-[140vw] -ml-[20vw] h-56 bg-white">
        <Image
          className="absolute -top-40"
          src="/Highlight.png"
          alt="Gambar Highlith Karampuang"
          height={100}
          width={2000}
          priority
        />
      </div>
      <Heading
        className="mb-10 md:mt-24"
        heading={<>Sebuah <b>Dokumenter</b></>}
        subheading="Ikuti perjalanan kami menelusuri surga tersembunyi"
      />
      <YouTubeEmbed videoId="hRYZ_fCX_pk" />

      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 ${inter.className}`}
      >
        {/* Other Components Here */}
        <Map />
      </main>
      <Footer />
    </>
  );
}

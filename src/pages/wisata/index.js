import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import YouTubeEmbed from "@/Components/YoutubeEmbed";
import Heading from "@/Components/Heading";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";

export default function Wisata({tourism}){
    const cardData = [...tourism.map(t => ({...t, slug: `wisata/${t.slug}`})), {
        cardTitle: 'Situs Alam',
        title: 'Situs Wisata Alam',
        card: '/GoaLidah.png',
        slug: 'objek-lokal'
    }]
    return (
        <>
            <Navbar />
            <Hero
                heading="Wisata Karampuang"
                subheading="Jelajahi Pesona"
                image="/Vector_S.png" />

      <Heading
        heading={
          <>
            Pesona <b>Wisata</b>
          </>
        }
        subheading="Saksikan keindahan alam tersembunyi di Pulau Karampuang"
      />
      <div className="flex justify-center mt-10">
        <YouTubeEmbed videoId="iyeE3pIMotc" />
      </div>

      <p className="font-montserrat text-lg p-4 max-w-3xl mt-4 mb-20 text-center mx-auto">
        <b>Selamat datang di Pulau Karampuang,</b>
        <br /> surga tersembunyi di Sulawesi yang menawarkan berbagai destinasi
        wisata yang menarik dengan pesona alam dan keindahan bawah laut yang
        memukau. Nikmati petualangan diving dan snorkeling di perairan jernih
        yang penuh dengan terumbu karang dan kehidupan laut yang berwarna-warni.
        Jelajahi Goa Lidah, formasi alami yang mempesona. Temukan Sumur Kapal,
        sebuah fenomena alam unik di mana air laut menyusup ke daratan,
        menciptakan sumur alami yang menakjubkan. Jangan lupa mengunjungi Sumur
        Jodoh 3 Rasa, di mana Anda bisa merasakan keajaiban tiga rasa air yang
        berbeda dalam satu tempat yang dipercaya membawa keberuntungan bagi para
        pencari cinta, Karampuang menanti Anda dengan segala pesonanya!
      </p>

      <Heading
        heading={
          <>
            Destinasi <b>Unggulan</b>
          </>
        }
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
                {card.cardTitle}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={card.title}
              className="z-0 w-full h-full object-cover"
              src={card.card}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">wisata</p>
                  <p className="text-tiny text-white/60">{card.subtitle}</p>
                </div>
              </div>
                        <Link href={card.slug}>
                  <Button radius="full" size="sm">
                    Lihat Lebih Lanjut
                  </Button>
                        </Link>
                        
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'content/wisata');
    const filenames = fs.readdirSync(postsDirectory);
    const tourism = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const postFilePath = path.join(process.cwd(), 'content/wisata', `${slug}.md`);
        const fileContent = fs.readFileSync(postFilePath, 'utf8');
        const { content, data } = matter(fileContent);
        return {...data, slug}
    });
  
    return {
      props: {
        tourism
      },
    };
  }

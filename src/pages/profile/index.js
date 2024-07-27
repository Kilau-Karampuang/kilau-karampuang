import Heading from "@/Components/Heading";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import YouTubeEmbed from "@/Components/YoutubeEmbed";

export default function Profil(){
    return (
        <>
            <Navbar />
            <Hero
                subheading="Mengenal Lebih Dekat"
                heading="Profil Karampuang" 
            />
            <Heading
                className="mb-10 md:mt-24"
                heading={<>Sebuah <b>Dokumenter</b></>}
                subheading="Ikuti perjalanan kami menelusuri surga tersembunyi"
            />
            <YouTubeEmbed videoId="hRYZ_fCX_pk" />

            <h1 className="text-center text-2xl my-4">
                Tentang Karampuang
            </h1>
            <p className="text-center max-w-3xl text-lg mx-auto px-4 mb-8">
                <b>Karampuang,</b> wilayah yang terletak di sebuah pulau kecil berlokasi di Kecamatan Mamuju, Kabupaten Mamuju, Sulawesi Barat, Indonesia, 
                menawarkan pengalaman wisata yang menakjubkan dengan keindahan alam yang masih alami dan kekayaan budaya yang beragam. 
                Perjalanan ke Karampuang dapat dinikmati melalui jalur laut menggunakan kapal yang ditempuh sekitar 30 menit dari Kota Mamuju, 
                memungkinkan pengunjung untuk menikmati pemandangan laut yang mempesona sepanjang perjalanan.
            </p>

            <h1 className="text-center text-2xl my-4">
                Desa dan Dusun
            </h1>
            <p className="text-center max-w-3xl text-lg mx-auto px-4 mb-8">
                Desa Karampuang terdiri dari 11 dusun, masing-masing memiliki karakteristik dan daya tarik tersendiri. 
                Beberapa dusun di antaranya adalah Dusun Karampuang I, Dusun Karampuang II, Dusun Gunung Gembira, Dusun Joli, 
                Dusun Batu Bira, Dusun Karaeang, Dusun Bajak, Dusun Ujung Bulo, Dusun Ujung Bulo Wisata, Dusun Sepang, dan Dusun Nangka.
            </p>

            <h1 className="text-center text-2xl my-4">
                Asal-Usul Penamaan
            </h1>
            <p className="text-center max-w-3xl text-lg mx-auto px-4 mb-20">
            Ada dua versi cerita tentang asal-usul nama Karampuang. 
            Versi pertama mengatakan bahwa nama Karampuang berasal dari bahasa Mamuju yang berarti rembulan atau bulan purnama. 
            Versi kedua menjelaskan bahwa nama tersebut terdiri dari kata "karam" atau "kara" yang berarti batu karang 
            dan "puang" yang berarti raja, yang menunjukkan bahwa pulau ini dulunya merupakan tempat persembunyian para raja. 
            Selain itu, pulau ini juga disebut Pulau Buaya karena bentuknya yang menyerupai moncong buaya ketika dilihat dari atas.
            </p>
        </>
    )
}
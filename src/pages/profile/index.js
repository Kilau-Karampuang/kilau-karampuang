import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

export default function Profil(){
    return (
        <>
            <Navbar />
            <Hero
                subheading="Mengenal Lebih Dekat"
                heading="Profil Karampuang" 
            />
            <h1 className="text-center text-2xl my-4">
                Desa Karampuang
            </h1>
            <p className="text-center max-w-3xl text-lg mx-auto px-4">
                <b>Karampuang,</b> wilayah yang terletak di sebuah pulau kecil berlokasi di Kecamatan Mamuju, Kabupaten Mamuju, Sulawesi Barat, Indonesia, 
                menawarkan pengalaman wisata yang menakjubkan dengan keindahan alam yang masih alami dan kekayaan budaya yang beragam. 
                Perjalanan ke Karampuang dapat dinikmati melalui jalur laut menggunakan kapal yang ditempuh sekitar 30 menit dari Kota Mamuju, 
                memungkinkan pengunjung untuk menikmati pemandangan laut yang mempesona sepanjang perjalanan.
            </p>
        </>
    )
}
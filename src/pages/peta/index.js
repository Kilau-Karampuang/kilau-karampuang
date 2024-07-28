import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Peta() {
  return (
    <div>
      <Navbar />
      <Hero heading="Desa Karampuang" subheading="Eksplorasi Bersama"/>
      <div className="flex justify-center items-center h-screen my-32">
        <Image src="/batas-dusun.png" width={1080} height={1080} />
      </div>
    </div>
  );
}

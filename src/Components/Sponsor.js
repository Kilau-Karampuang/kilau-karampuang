import Image from "next/image";
import Link from "next/link";

export default function Sponsor() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4 mt-24">
        <h1 className="text-2xl font-montserrat">
          <span className="font-bold">Mitra</span> Kegiatan
        </h1>
        <p className="hidden sm:block sm:text-lg font-montserrat mb-4 text-center">
          Kegiatan KKN PPM UGM 2024 Kilau Karampuang didukung oleh
        </p>
        <div className="flex flex-col items-center mb-12 gap-4">
          <Link href="https://bpjs-kesehatan.go.id" target="_blank">
            <Image
              src="/bpjs-kesehatan.jpg"
              width={450}
              height={200}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              alt="BPJS Kesehatan"
            />
          </Link>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="https://www.pom.go.id" target="_blank">
              <Image
                src="/bpom.png"
                width={120}
                height={120}
                className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
                alt="BPOM"
              />
            </Link>
            <Link href="https://www.pupuk-indonesia.com" target="_blank">
              <Image
                src="/pupuk-indonesia.png"
                width={150}
                height={150}
                className="w-24 sm:w-32 md:w-40 lg:w-56 xl:w-64"
                alt="Pupuk Indonesia"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

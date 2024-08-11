import Image from 'next/image';

export default function Sponsor() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4 mt-24">
        <h1 className="text-2xl font-montserrat">
          <span className="font-bold">Mitra</span> Kegiatan
        </h1>
        <p className="text-lg font-montserrat mb-4 text-center">
          Kegiatan KKN PPM UGM 2024 Kilau Karampuang didukung oleh
        </p>
        <div className="flex flex-col items-center mb-12 gap-4">
          <Image
            src="/bpjs-kesehatan.jpg"
            width={450}
            height={150}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            alt="BPJS Kesehatan"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Image
              src="/bpom.png"
              width={200}
              height={200}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
              alt="BPOM"
            />
            <Image
              src="/pupuk-indonesia.png"
              width={300}
              height={300}
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80"
              alt="Pupuk Indonesia"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';

export default function Sponsor() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4 mt-24">
        <h1 className="text-2xl font-montserrat">
          <span className="font-bold">Mitra</span> Kegiatan
        </h1>
        <p className="text-lg font-montserrat">Kegiatan KKN PPM UGM 2024 Kilau Karampuang didukung oleh</p>
        <div className="flex flex-col items-center mb-12 gap-4">
          <Image src="/bpjs-kesehatan.jpg" width={450} height={150} />
          <div className="flex flex-row justify-center items-center gap-4">
            <Image src="/bpom.png" width={200} height={200} />
            <Image src="/pupuk-indonesia.png" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}

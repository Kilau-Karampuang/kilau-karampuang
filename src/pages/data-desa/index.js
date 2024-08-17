import React from "react";
import Hero from "@/Components/Hero";

export default function DataDesa() {
  const dataDesa = [
    {
      name: "Peta Batas Dusun",
      desc: "Informasi lengkap mengenai peta batas dusun di Pulau Karampuang",
      file: "./data/batas-dusun.png"
    },
    {
      name: "Data Penduduk Lengkap",
      desc: "Data lengkap mengenai jumlah penduduk, struktur usia, pekerjaan, dan kondisi pemukiman di Pulau Karampuang",
      file: "./data/DataPenduduk.rar"
    }
  ];

  return (
    <div>
      <Hero heading="Data Desa" subheading="Portal Informasi" />
      <div className="container mx-auto px-4 py-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {dataDesa.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                  {item.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                  {item.desc}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                  <a
                    href={item.file}
                    download
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Hero from "@/Components/Hero";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function TinggiPotensiGenetik() {
  const [fatherHeight, setFatherHeight] = useState("");
  const [motherHeight, setMotherHeight] = useState("");
  const [isMale, setIsMale] = useState(true);
  const [error, setError] = useState("");
  const [upperTPG, setUpperTPG] = useState(0);
  const [lowerTPG, setLowerTPG] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [initialModal, setInitialModal] = useState(true);

  const calculateTPG = () => {
    const fatherHeightNum = parseFloat(fatherHeight);
    const motherHeightNum = parseFloat(motherHeight);

    if (isNaN(fatherHeightNum) || isNaN(motherHeightNum)) {
      setError("Mohon isi tinggi ayah dan ibu dengan angka!");
      setInitialModal(false);
      setModalIsOpen(true);
      return;
    }

    if (fatherHeightNum < 0 || motherHeightNum < 0) {
      setError("Tinggi badan tidak boleh negatif!");
      setInitialModal(false);
      setModalIsOpen(true);
      return;
    }

    setError("");

    if (isMale) {
      setUpperTPG((motherHeightNum + 13 + fatherHeightNum) / 2 + 8.5);
      setLowerTPG((motherHeightNum + 13 + fatherHeightNum) / 2 - 8.5);
    } else {
      setUpperTPG((fatherHeightNum - 13 + motherHeightNum) / 2 + 8.5);
      setLowerTPG((fatherHeightNum - 13 + motherHeightNum) / 2 - 8.5);
    }

    setModalIsOpen(true);
    setInitialModal(false);
  };

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  return (
    <>
      <div>
        <Hero heading="Tinggi Potensi Genetik" subheading="Kalkulator" />
        <div className="max-w-2xl mx-auto p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateTPG();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row justify-around">
              <label className="w-full sm:w-1/5 mb-2 sm:mb-0 text-center sm:text-left">
                Tinggi Badan Ayah (cm):
              </label>
              <input
                type="number"
                value={fatherHeight}
                onChange={(e) => setFatherHeight(e.target.value)}
                className="w-full sm:w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-around">
              <label className="w-full sm:w-1/5 mb-2 sm:mb-0 text-center sm:text-left">
                Tinggi Badan Ibu (cm):
              </label>
              <input
                type="number"
                value={motherHeight}
                onChange={(e) => setMotherHeight(e.target.value)}
                className="w-full sm:w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-around">
              <label className="w-full sm:w-1/5 mb-2 sm:mb-0 text-center sm:text-left">
                Jenis Kelamin
              </label>
              <div className="flex w-full sm:w-4/5">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="gender"
                    checked={isMale}
                    onChange={() => setIsMale(true)}
                    className="mr-2"
                  />
                  Laki-Laki
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    checked={!isMale}
                    onChange={() => setIsMale(false)}
                    className="mr-2"
                  />
                  Perempuan
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 font-bold w-full sm:w-1/5 p-2 bg-yellow-500 text-black rounded"
              >
                Hitung!
              </button>
            </div>
          </form>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel={
            initialModal
              ? "Informasi Kalkulator TPG"
              : error
              ? "Error"
              : "Hasil Kalkulasi TPG"
          }
          className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg p-4"
          overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 z-50"
        >
          {initialModal ? (
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-4">
                Informasi Kalkulator Tinggi Potensi Genetik
              </h2>
              <p>
                Kalkulator ini digunakan untuk menghitung potensi tinggi badan
                anak berdasarkan tinggi badan orang tua. Informasi yang
                dibutuhkan adalah tinggi badan ibu, tinggi badan ayah, dan jenis
                kelamin anak. Hasil kalkulasi dapat menjadi acuan tinggi badan
                ideal dari anak.
              </p>
              <button
                onClick={() => {
                  setModalIsOpen(false);
                  setInitialModal(false);
                }}
                className="mt-4 p-2 bg-yellow-500 text-black rounded"
              >
                Tutup
              </button>
            </div>
          ) : error ? (
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-4">Error</h2>
              <p>{error}</p>
              <button
                onClick={() => setModalIsOpen(false)}
                className="mt-4 p-2 bg-yellow-500 text-black rounded"
              >
                Tutup
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">
                Hasil Kalkulasi Tinggi Potensi Genetik
              </h2>
              <p>
                Rentang Tinggi Badan Anak: {lowerTPG.toFixed(2)} cm -{" "}
                {upperTPG.toFixed(2)} cm
              </p>
              <button
                onClick={() => setModalIsOpen(false)}
                className="mt-4 p-2 bg-yellow-500 text-black rounded"
              >
                Tutup
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}

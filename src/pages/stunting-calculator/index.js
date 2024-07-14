import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement('#__next');

function StuntingCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [hemoglobin, setHemoglobin] = useState('');
  const [maternalDisease, setMaternalDisease] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [economicStatus, setEconomicStatus] = useState('');
  const [risk, setRisk] = useState(null);
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [initialModal, setInitialModal] = useState(true);

  const calculateRisk = () => {
    if (!height || !weight || !age || !hemoglobin || !economicStatus) {
      setError('Mohon isi semua kolom!');
      setRisk(null);
      setInitialModal(false);
      setModalIsOpen(true);
      return;
    }

    setError('');

    let riskScore = 0;
    let totalWeight = 0;

    if (height < 145) {
      riskScore += 20; // 20% weight for height
      totalWeight += 20;
    }
    if (weight / ((height / 100) * (height / 100)) < 18.5) {
      riskScore += 25; // 25% weight for BMI
      totalWeight += 25;
    }
    if (age < 20 || age > 35) {
      riskScore += 15; // 15% weight for age
      totalWeight += 15;
    }
    if (hemoglobin < 11) {
      riskScore += 20; // 20% weight for hemoglobin
      totalWeight += 20;
    }
    if (maternalDisease) {
      riskScore += 20; // 20% weight for maternal disease
      totalWeight += 20;
    }
    if (smoking) {
      riskScore += 10; // 10% weight for smoking
      totalWeight += 10;
    }
    if (economicStatus === 'low') {
      riskScore += 30; // 30% weight for low economic status
      totalWeight += 30;
    }

    let normalizedRiskScore = (riskScore / totalWeight) * 100;
    setRisk(`${normalizedRiskScore.toFixed(2)}%`)

    setModalIsOpen(true);
    setInitialModal(false);
  };

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero heading="Stunting Anak" subheading="Kalkulator Deteksi" />
      <div className="mx-auto p-4">
        <form 
          onSubmit={(e) => { e.preventDefault(); calculateRisk(); }} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Tinggi Badan Ibu (cm):</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              className="w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Berat Badan Ibu (kg):</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              className="w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Usia Ibu:</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              className="w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Hemoglobin Ibu (g/dL):</label>
            <input 
              type="number" 
              value={hemoglobin} 
              onChange={(e) => setHemoglobin(e.target.value)} 
              className="w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
            />
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Penyakit Maternal?</label>
            <div className="flex w-4/5">
              <input 
                type="checkbox" 
                checked={maternalDisease} 
                onChange={(e) => setMaternalDisease(e.target.checked)} 
                className="mr-2"
              /> Iya
              <input 
                type="checkbox" 
                checked={!maternalDisease} 
                onChange={(e) => setMaternalDisease(!e.target.checked)} 
                className="ml-4 mr-2"
              /> Tidak
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Terpapar Asap Rokok?</label>
            <div className="flex w-4/5">
              <input 
                type="checkbox" 
                checked={smoking} 
                onChange={(e) => setSmoking(e.target.checked)} 
                className="mr-2"
              /> Iya
              <input 
                type="checkbox" 
                checked={!smoking} 
                onChange={(e) => setSmoking(!e.target.checked)} 
                className="ml-4 mr-2"
              /> Tidak
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <label className="w-1/5 mb-2 text-center">Status Ekonomi:</label>
            <select 
              value={economicStatus} 
              onChange={(e) => setEconomicStatus(e.target.value)} 
              className="w-4/5 p-2 border border-gray-300 bg-gray-100 rounded"
            >
              <option value="">Pilih</option>
              <option value="low">Rendah</option>
              <option value="medium">Menengah</option>
              <option value="high">Tinggi</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="mt-4 font-bold w-1/5 p-2 bg-yellow-500 text-black rounded"
            >
              Hitung!
            </button>
          </div>
        </form>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel={initialModal ? "Informasi Kalkulasi Stunting" : error ? "Error" : "Hasil Kalkulasi Risiko Stunting"}
        className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg p-4"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 z-50"
      >
        {initialModal ? (
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">Informasi Kalkulasi Stunting</h2>
            <p>Kalkulator ini menggunakan beberapa parameter untuk menghitung risiko stunting pada anak berdasarkan tinggi badan ibu, berat badan ibu, usia ibu, kadar hemoglobin ibu, adanya penyakit maternal, paparan asap rokok, dan status ekonomi.</p>
            <button 
              onClick={() => { setModalIsOpen(false); setInitialModal(false); }} 
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
            <h2 className="text-xl font-bold mb-4">Hasil Kalkulasi Risiko Stunting</h2>
            <p>Risiko Stunting: {risk}</p>
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
  );
}

export default StuntingCalculator;

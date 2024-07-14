import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { useState } from "react";

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

  const calculateRisk = () => {
    if (!height || !weight || !age || !hemoglobin || !economicStatus) {
      setError('Please fill in all fields');
      setRisk(null);
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

    if (normalizedRiskScore >= 50) {
      setRisk(`High (${normalizedRiskScore.toFixed(2)}%)`);
    } else if (normalizedRiskScore >= 30) {
      setRisk(`Medium (${normalizedRiskScore.toFixed(2)}%)`);
    } else {
      setRisk(`Low (${normalizedRiskScore.toFixed(2)}%)`);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero heading="Stunting Anak" subheading="Kalkulator Deteksi" />
      <div className=" mx-auto p-4">
        <form 
          onSubmit={(e) => { e.preventDefault(); calculateRisk(); }} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label className="mb-2">Tinggi Badan Ibu (cm):</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Berat Badan Ibu (kg):</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Usia Ibu:</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Hemoglobin Ibu (g/dL):</label>
            <input 
              type="number" 
              value={hemoglobin} 
              onChange={(e) => setHemoglobin(e.target.value)} 
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Penyakit Maternal?</label>
            <div className="flex items-center">
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
          <div className="flex flex-col">
            <label className="mb-2">Terpapar Asap Rokok?</label>
            <div className="flex items-center">
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
          <div className="flex flex-col">
            <label className="mb-2">Status Ekonomi:</label>
            <select 
              value={economicStatus} 
              onChange={(e) => setEconomicStatus(e.target.value)} 
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Pilih</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="p-2 bg-yellow-500 text-black rounded"
          >
            Hitung!
          </button>
        </form>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        {risk && <div className="result mt-4">Risiko Stunting: {risk}</div>}
      </div>
    </div>
  );
}

export default StuntingCalculator;

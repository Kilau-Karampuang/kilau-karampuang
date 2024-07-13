import Navbar from "@/Components/Navbar";
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
      {/* <Navbar /> */}
      <div className="container" style={{ padding: "20px" }}>
        <h1>Stunting Risk Calculator</h1>
        <form 
          onSubmit={(e) => { e.preventDefault(); calculateRisk(); }} 
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div>
            <label>Height (cm):</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Age (years):</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Hemoglobin (g/dL):</label>
            <input 
              type="number" 
              value={hemoglobin} 
              onChange={(e) => setHemoglobin(e.target.value)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Maternal Disease (Yes/No):</label>
            <input 
              type="checkbox" 
              checked={maternalDisease} 
              onChange={(e) => setMaternalDisease(e.target.checked)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Smoking (Yes/No):</label>
            <input 
              type="checkbox" 
              checked={smoking} 
              onChange={(e) => setSmoking(e.target.checked)} 
              style={{ marginLeft: "10px" }} 
            />
          </div>
          <div>
            <label>Economic Status (Low/Medium/High):</label>
            <select 
              value={economicStatus} 
              onChange={(e) => setEconomicStatus(e.target.value)} 
              style={{ marginLeft: "10px" }}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button 
            type="submit" 
            style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
          >
            Calculate Risk
          </button>
        </form>
        {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        {risk && <div className="result" style={{ marginTop: "10px" }}>Stunting Risk: {risk}</div>}
      </div>
    </div>
  );
}

export default StuntingCalculator;

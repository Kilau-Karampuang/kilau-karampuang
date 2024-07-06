import Navbar from "@/Components/Navbar";
import { useState } from "react";

const StuntingCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState(null);

  const calculateStunting = (e) => {
    e.preventDefault();

    /* TODO: FIX CALCULATION ALGORITHM */
    const heightInCm = parseFloat(height);
    const weightInKg = parseFloat(weight);
    const ageInYears = parseFloat(age);

    if (isNaN(heightInCm) || isNaN(weightInKg) || isNaN(ageInYears)) {
      setResult("Please enter valid numbers for height, weight, and age.");
      return;
    }

    /* TODO: FIX SCORE THRESHOLD */
    const stuntingThreshold = 100 - (ageInYears * 2);

    if (heightInCm < stuntingThreshold) {
      setResult("The child is stunted.");
    } else {
      setResult("The child is not stunted.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        <h1 className="text-2xl font-bold mb-8">Stunting Calculator</h1>
        <form onSubmit={calculateStunting} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age (years)
            </label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Calculate
            </button>
          </div>
        </form>
        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>{result}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StuntingCalculator;

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border-4 border-indigo-200">
        <div className="flex gap-2 items-center justify-center mb-6">
            <Link to="/">

              <ArrowLeft className="w-8 h-8 text-indigo-600" />
            </Link>
            <h1 className="text-3xl font-bold text-indigo-600 ">
              Counter
            </h1>
          </div>

        {/* Counter Display */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 mb-8 border-4 border-indigo-300">
          <div className="text-center">
            <p className="text-white text-lg mb-2 font-semibold">
              Current Count
            </p>
            <p className="text-white text-6xl font-bold">{count}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          {/* Increment and Decrement */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={decrement}
              className="bg-white text-red-600 font-semibold py-4 px-6 rounded-xl border-4 border-red-400 hover:bg-red-50 active:scale-95 transition-all duration-150 shadow-md"
            >
              <span className="text-2xl">−</span>
              <span className="block text-sm mt-1">Decrease</span>
            </button>

            <button
              onClick={increment}
              className="bg-white text-green-600 font-semibold py-4 px-6 rounded-xl border-4 border-green-400 hover:bg-green-50 active:scale-95 transition-all duration-150 shadow-md"
            >
              <span className="text-2xl">+</span>
              <span className="block text-sm mt-1">Increase</span>
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={reset}
            className="w-full bg-white text-indigo-600 font-semibold py-4 px-6 rounded-xl border-4 border-indigo-400 hover:bg-indigo-50 active:scale-95 transition-all duration-150 shadow-md"
          >
            <span className="text-xl">↻</span>
            <span className="ml-2">Reset</span>
          </button>
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Click the buttons to change the counter value
        </p>
      </div>
    </div>
  );
}

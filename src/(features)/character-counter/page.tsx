import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const characters = text.length;
    const lines = text.split("\n").length;
    const letters = text.replace(/[^a-zA-Z]/g, "").length;

    // Calculate letter frequency
    const letterFreq: Record<string, number> = {};
    const lowerText = text.toLowerCase();

    for (const char of lowerText) {
      if (/[a-z]/.test(char)) {
        letterFreq[char] = (letterFreq[char] || 0) + 1;
      }
    }

    // Sort by frequency and get top 10
    const sortedLetters = Object.entries(letterFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const maxFreq = sortedLetters[0]?.[1] || 1;

    return {
      characters,
      lines,
      letters,
      letterFreq: sortedLetters,
      maxFreq,
    };
  }, [text]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
          <div className="flex gap-2 items-center justify-center mb-6">
            <Link to="/">
              <ArrowLeft className="w-8 h-8 text-gray-800" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 ">
              Character Counter
            </h1>
          </div>

          {/* Text Input Area */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="w-full h-48 p-4 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none resize-none font-mono text-sm"
          />

          {/* Statistics Cards */}
          <div className="grid grid-cols-3 gap-2  md:gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 md:p-4 text-white">
              <div className="text-sm font-medium opacity-90">Characters</div>
              <div className="text-3xl font-bold mt-1">{stats.characters}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-2 md:p-4 text-white">
              <div className="text-sm font-medium opacity-90">Lines</div>
              <div className="text-3xl font-bold mt-1">{stats.lines}</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-2  md:p-4 text-white">
              <div className="text-sm font-medium opacity-90">Letters</div>
              <div className="text-3xl font-bold mt-1">{stats.letters}</div>
            </div>
          </div>

          {/* Letter Frequency Graph */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Most Used Letters
            </h2>

            {stats.letterFreq.length > 0 ? (
              <div className="space-y-3">
                {stats.letterFreq.map(([letter, count]) => {
                  const percentage = (count / stats.maxFreq) * 100;

                  return (
                    <div key={letter} className="flex items-center gap-3">
                      <div className="w-8 text-center font-bold text-gray-700 uppercase">
                        {letter}
                      </div>

                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                          style={{ width: `${percentage}%` }}
                        >
                          <span className="text-white font-semibold text-sm">
                            {count}
                          </span>
                        </div>
                      </div>

                      <div className="w-16 text-right text-sm text-gray-600">
                        {((count / stats.letters) * 100).toFixed(1)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                Start typing to see letter frequency
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

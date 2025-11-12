import { Calendar, Sparkles, Star } from "lucide-react";
import React, { useState } from "react";
import { celebritiesDate, type Celebrity } from "./data/celebritiesDate";





const zodiacSigns = [
  { name: "Capricorn", start: [12, 22], end: [1, 19], emoji: "♑" },
  { name: "Aquarius", start: [1, 20], end: [2, 18], emoji: "♒" },
  { name: "Pisces", start: [2, 19], end: [3, 20], emoji: "♓" },
  { name: "Aries", start: [3, 21], end: [4, 19], emoji: "♈" },
  { name: "Taurus", start: [4, 20], end: [5, 20], emoji: "♉" },
  { name: "Gemini", start: [5, 21], end: [6, 20], emoji: "♊" },
  { name: "Cancer", start: [6, 21], end: [7, 22], emoji: "♋" },
  { name: "Leo", start: [7, 23], end: [8, 22], emoji: "♌" },
  { name: "Virgo", start: [8, 23], end: [9, 22], emoji: "♍" },
  { name: "Libra", start: [9, 23], end: [10, 22], emoji: "♎" },
  { name: "Scorpio", start: [10, 23], end: [11, 21], emoji: "♏" },
  { name: "Sagittarius", start: [11, 22], end: [12, 21], emoji: "♐" },
];

const getZodiacSign = (month: number, day: number) => {
  for (const sign of zodiacSigns) {
    const [startMonth, startDay] = sign.start;
    const [endMonth, endDay] = sign.end;

    if (month === startMonth && day >= startDay) return sign;
    if (month === endMonth && day <= endDay) return sign;
  }
  return zodiacSigns[0];
};

export default function StarDate() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [matches, setMatches] = useState<Celebrity[]>([]);
  const [searched, setSearched] = useState(false);
  const [zodiac, setZodiac] = useState<{ name: string; emoji: string } | null>(
    null
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const m = parseInt(month);
    const d = parseInt(day);

    if (m && d) {
      const found = celebritiesDate.filter((c) => c.month === m && c.day === d);
      setMatches(found);
      setSearched(true);
      setZodiac(getZodiacSign(m, d));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
        <div className="min-h-screen backdrop-blur-sm bg-white/10">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">
                  StarDate
                </h1>
                <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-xl text-white/90 font-light">
                Discover your celebrity birthday twins
              </p>
            </div>

            {/* Search Form */}
            <div className="max-w-2xl mx-auto mb-12">
              <form
                onSubmit={handleSearch}
                className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Enter Your Birthday
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Month
                    </label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      required
                    >
                      <option value="">Select Month</option>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((m, i) => (
                        <option key={m} value={i + 1}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Day
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="31"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      placeholder="Day"
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Star className="w-5 h-5" />
                  Find My Birthday Twins
                </button>
              </form>
            </div>

            {/* Zodiac Sign */}
            {zodiac && searched && (
              <div className="max-w-2xl mx-auto mb-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl animate-fade-in">
                <div className="text-center">
                  <p className="text-3xl mb-2">{zodiac.emoji}</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Your Zodiac Sign:{" "}
                    <span className="text-purple-600">{zodiac.name}</span>
                  </p>
                </div>
              </div>
            )}

            {/* Results */}
            {searched && (
              <div className="max-w-6xl mx-auto">
                {matches.length > 0 ? (
                  <>
                    <h3 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
                      Found {matches.length} Birthday Twin
                      {matches.length > 1 ? "s" : ""}! 🎉
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {matches.map((celeb, index) => (
                        <div
                          key={celeb.id}
                          className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={celeb.image}
                              alt={celeb.name}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4">
                              <div className="flex items-center gap-2 text-yellow-300">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="text-sm font-semibold">
                                  {celeb.achievement}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">
                              {celeb.name}
                            </h4>
                            <p className="text-sm text-purple-600 font-semibold mb-3">
                              Born:{" "}
                              {new Date(
                                2000,
                                celeb.month - 1,
                                celeb.day
                              ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {celeb.bio}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12 text-center shadow-xl max-w-2xl mx-auto">
                    <p className="text-2xl text-gray-600 mb-4">
                      No celebrity matches found for this date... yet!
                    </p>
                    <p className="text-gray-500">
                      But that makes your birthday even more special! ✨
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

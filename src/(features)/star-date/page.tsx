import {
  ArrowLeft,
  Calendar,
  Filter,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

const monthNames = [
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
  const [showBrowse, setShowBrowse] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  const handleSearch = () => {
    const m = parseInt(month);
    const d = parseInt(day);

    if (m && d) {
      const found = celebritiesDate.filter((c) => c.month === m && c.day === d);
      setMatches(found);
      setSearched(true);
      setZodiac(getZodiacSign(m, d));
      setShowBrowse(false);
    }
  };

  const filteredCelebrities = useMemo(() => {
    let filtered = [...celebritiesDate];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.achievement.toLowerCase().includes(query) ||
          c.bio.toLowerCase().includes(query)
      );
    }

    // Filter by month
    if (filterMonth) {
      const m = parseInt(filterMonth);
      filtered = filtered.filter((c) => c.month === m);
    }

    // Sort by date
    filtered.sort((a, b) => {
      if (a.month !== b.month) return a.month - b.month;
      return a.day - b.day;
    });

    return filtered;
  }, [searchQuery, filterMonth]);

  const clearFilters = () => {
    setSearchQuery("");
    setFilterMonth("");
  };

  const celebrityStats = useMemo(() => {
    const byMonth = celebritiesDate.reduce((acc, c) => {
      acc[c.month] = (acc[c.month] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    return byMonth;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <div className="min-h-screen backdrop-blur-sm bg-white/10">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
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

          {/* Quick Stats Bar */}
          <div className="max-w-4xl mx-auto mb-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-semibold">
                  {celebritiesDate.length} Celebrities in Database
                </span>
              </div>
              <button
                onClick={() => {
                  setShowBrowse(!showBrowse);
                  setSearched(false);
                }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                {showBrowse ? "Hide" : "Browse All Celebrities"}
              </button>
            </div>
          </div>

          {/* Browse Section */}
          {showBrowse && (
            <div className="max-w-6xl mx-auto mb-12 animate-fade-in">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-6 h-6 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Browse All Celebrities
                  </h2>
                </div>

                {/* Search and Filter */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="md:col-span-2 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by name, achievement, or bio..."
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={filterMonth}
                      onChange={(e) => setFilterMonth(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all appearance-none"
                    >
                      <option value="">All Months</option>
                      {monthNames.map((m, i) => (
                        <option key={m} value={i + 1}>
                          {m}{" "}
                          {celebrityStats[i + 1]
                            ? `(${celebrityStats[i + 1]} in this month)`
                            : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clear Filters Button */}
                {(searchQuery || filterMonth) && (
                  <div className="mb-6">
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-all flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Clear Filters
                    </button>
                  </div>
                )}

                {/* Results Count */}
                <div className="mb-4">
                  <p className="text-gray-600 font-medium">
                    Showing {filteredCelebrities.length} of{" "}
                    {celebritiesDate.length} celebrities
                  </p>
                </div>

                {/* Celebrity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[800px] overflow-y-auto pr-2">
                  {filteredCelebrities.map((celeb, index) => (
                    <div
                      key={celeb.id}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-purple-100"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={celeb.image}
                          alt={celeb.name}
                          className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-3">
                          <div className="flex items-center gap-2 text-yellow-300">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-xs font-semibold">
                              {celeb.achievement}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {celeb.name}
                        </h4>
                        <p className="text-sm text-purple-600 font-semibold mb-3 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {monthNames[celeb.month - 1]} {celeb.day}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {celeb.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCelebrities.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-500">
                      No celebrities found matching your criteria
                    </p>
                    <button
                      onClick={clearFilters}
                      className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Birthday Search Section */}
          {!showBrowse && (
            <>
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
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
                      >
                        <option value="">Select Month</option>
                        {monthNames.map((m, i) => (
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
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Star className="w-5 h-5" />
                    Find My Birthday Twins
                  </button>
                </div>
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
                                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4">
                                <div className="flex items-center gap-2 text-yellow-300">
                                  <Star className="w-4 h-4 fill-current" />
                                  <span className="text-sm font-semibold">
                                    {celeb.achievement}
                                  </span>
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h4 className="text-xl font-bold text-white">
                                  {celeb.name}
                                </h4>
                                <p className="text-sm text-purple-200 font-semibold flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {monthNames[celeb.month - 1]} {celeb.day}
                                </p>
                              </div>
                            </div>
                            <div className="p-6">
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {celeb.bio}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-purple-600 font-semibold">
                                  {getZodiacSign(celeb.month, celeb.day).emoji}{" "}
                                  {getZodiacSign(celeb.month, celeb.day).name}
                                </span>
                                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                  Birthday Twin
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 animate-fade-in">
                      <div className="text-6xl mb-4">🎭</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        No Birthday Twins Found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        No celebrities share your birthday in our database, but
                        you're one of a kind! ✨
                      </p>
                      <button
                        onClick={() => setShowBrowse(true)}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                      >
                        Browse All Celebrities
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

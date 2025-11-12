import { Calendar, Sparkles, Star } from "lucide-react";
import React, { useState } from "react";

interface Celebrity {
  id: number;
  name: string;
  month: number;
  day: number;
  image: string;
  bio: string;
  achievement: string;
}

const celebrities: Celebrity[] = [
  {
    id: 1,
    name: "Albert Einstein",
    month: 3,
    day: 14,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is known for its influence on the philosophy of science and he received the Nobel Prize in Physics in 1921.",
    achievement: "Father of Modern Physics",
  },
  {
    id: 2,
    name: "Leonardo DiCaprio",
    month: 11,
    day: 11,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Award-winning actor and environmental activist known for his transformative roles in films like Titanic, Inception, and The Revenant. He's also a prominent advocate for environmental causes through his foundation.",
    achievement: "Academy Award Winner",
  },
  {
    id: 3,
    name: "Oprah Winfrey",
    month: 1,
    day: 29,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Media executive, actress, talk show host, and philanthropist. Best known for her talk show, which was the highest-rated television program of its kind in history and ran for 25 years.",
    achievement: "Media Mogul & Philanthropist",
  },
  {
    id: 4,
    name: "Taylor Swift",
    month: 12,
    day: 13,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Singer-songwriter known for narrative songs about her personal life. She has received numerous awards including 12 Grammy Awards and is one of the best-selling music artists of all time.",
    achievement: "Multi-Grammy Award Winner",
  },
  {
    id: 5,
    name: "Stephen Hawking",
    month: 1,
    day: 8,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at Cambridge. His work on black holes and relativity revolutionized our understanding of the universe.",
    achievement: "Renowned Cosmologist",
  },
  {
    id: 6,
    name: "Beyoncé",
    month: 9,
    day: 4,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Singer, songwriter, and actress who rose to fame as lead singer of Destiny's Child. She has won 32 Grammy Awards and is known for her powerful vocals, elaborate performances, and cultural impact.",
    achievement: "Most Grammy-Awarded Singer",
  },
  {
    id: 7,
    name: "Elon Musk",
    month: 6,
    day: 28,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Entrepreneur and business magnate, founder of SpaceX and CEO of Tesla. He has revolutionized multiple industries including electric vehicles, space exploration, and sustainable energy solutions.",
    achievement: "Tech Visionary & Innovator",
  },
  {
    id: 8,
    name: "Marie Curie",
    month: 11,
    day: 7,
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    bio: "Physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different sciences.",
    achievement: "Two-Time Nobel Laureate",
  },
  {
    id: 9,
    name: "Nelson Mandela",
    month: 7,
    day: 18,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Anti-apartheid revolutionary and political leader who served as President of South Africa. He was a global advocate for human rights and received the Nobel Peace Prize in 1993.",
    achievement: "Nobel Peace Prize Winner",
  },
  {
    id: 10,
    name: "Steve Jobs",
    month: 2,
    day: 24,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Co-founder of Apple Inc. and pioneering entrepreneur who revolutionized personal computing, animated films, music, phones, and digital publishing. His vision transformed multiple industries.",
    achievement: "Technology Revolutionary",
  },
  {
    id: 11,
    name: "Serena Williams",
    month: 9,
    day: 26,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Professional tennis player widely regarded as one of the greatest athletes of all time. She has won 23 Grand Slam singles titles and has dominated women's tennis for over two decades.",
    achievement: "23-Time Grand Slam Champion",
  },
  {
    id: 12,
    name: "William Shakespeare",
    month: 4,
    day: 23,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    bio: "English playwright, poet, and actor, widely regarded as the greatest writer in the English language. His works have been translated into every major language and are performed more often than those of any other playwright.",
    achievement: "Literary Legend",
  },
];

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
      const found = celebrities.filter((c) => c.month === m && c.day === d);
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

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CyberNinja: React.FC = () => {
  const levels = [
    {
      id: 1,
      path: "/games/cyber-ninja/1",
    },
    {
      id: 2,
      path: "/games/cyber-ninja/2",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Link
            to="/"
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30"
          >
            <ArrowLeft className="text-white text-2xl" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CYBER NINJA
            </h1>
            <p className="text-cyan-300/70 text-lg">
              Master each level and become a true Cyber Ninja
            </p>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-14 gap-6">
          {levels.map((level) => (
            <Link
              to={level.path}
              key={level.id}
              className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl "
            >
              {/* Level Number Badge */}
              <span className="text-white font-bold text-center flex justify-center text-lg">
                {level.id}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-cyan-300/50 text-sm">
          Complete each level to unlock the next challenge. Your progress is
          saved automatically.
        </p>
      </div>
    </div>
  );
};

export default CyberNinja;

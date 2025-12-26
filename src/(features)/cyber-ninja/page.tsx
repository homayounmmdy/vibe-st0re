import { ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Position {
  x: number;
  y: number;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

const CyberNinja: React.FC = () => {
  const [ninjaPos, setNinjaPos] = useState<Position>({ x: 50, y: 450 });
  const [velocity, setVelocity] = useState<Position>({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [score, setScore] = useState(0);
  const keysPressed = useRef<Set<string>>(new Set());

  const NINJA_SIZE = 30;
  const GRAVITY = 0.5;
  const JUMP_STRENGTH = -12;
  const MOVE_SPEED = 6;
  const GROUND_Y = 450;

  // Simple, well-spaced platforms for beginners
  const platforms: Platform[] = [
    { x: 200, y: 400, width: 120, height: 20 },
    { x: 400, y: 350, width: 120, height: 20 },
    { x: 600, y: 300, width: 120, height: 20 },
    { x: 800, y: 250, width: 120, height: 20 },
  ];

  const door = { x: 850, y: 170, width: 50, height: 80 };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!hasWon) {
        setScore((prev) => prev + 1);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [hasWon]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setNinjaPos((prev) => {
        let newX = prev.x;
        let newY = prev.y;
        let newVelY = velocity.y;
        let jumping = isJumping;

        // Horizontal movement
        if (
          keysPressed.current.has("ArrowRight") ||
          keysPressed.current.has("d")
        ) {
          newX += MOVE_SPEED;
        }
        if (
          keysPressed.current.has("ArrowLeft") ||
          keysPressed.current.has("a")
        ) {
          newX -= MOVE_SPEED;
        }

        // Keep ninja in bounds
        newX = Math.max(0, Math.min(950, newX));

        // Apply gravity
        newVelY += GRAVITY;
        newY += newVelY;

        // Check ground collision
        if (newY >= GROUND_Y) {
          newY = GROUND_Y;
          newVelY = 0;
          jumping = false;
        }

        // Check platform collisions
        for (const platform of platforms) {
          if (
            newX + NINJA_SIZE > platform.x &&
            newX < platform.x + platform.width &&
            newY + NINJA_SIZE >= platform.y &&
            newY + NINJA_SIZE <= platform.y + platform.height &&
            velocity.y >= 0
          ) {
            newY = platform.y - NINJA_SIZE;
            newVelY = 0;
            jumping = false;
            break;
          }
        }

        // Jump
        if (
          (keysPressed.current.has("ArrowUp") ||
            keysPressed.current.has("w") ||
            keysPressed.current.has(" ")) &&
          !jumping
        ) {
          newVelY = JUMP_STRENGTH;
          jumping = true;
        }

        setVelocity({ x: 0, y: newVelY });
        setIsJumping(jumping);

        // Check win condition
        if (
          newX + NINJA_SIZE > door.x &&
          newX < door.x + door.width &&
          newY + NINJA_SIZE > door.y &&
          newY < door.y + door.height
        ) {
          setHasWon(true);
          // Unlock next level
          setTimeout(() => {
            // In a real app, you'd save this to localStorage or a backend
            console.log("Level 1 completed! Level 2 unlocked.");
          }, 1000);
        }

        return { x: newX, y: newY };
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [velocity, isJumping]);

  const handleMoveLeft = () => {
    keysPressed.current.add("ArrowLeft");
  };

  const handleMoveRight = () => {
    keysPressed.current.add("ArrowRight");
  };

  const handleJump = () => {
    if (!isJumping) {
      keysPressed.current.add(" ");
      setTimeout(() => keysPressed.current.delete(" "), 100);
    }
  };

  const handleStopMove = () => {
    keysPressed.current.delete("ArrowLeft");
    keysPressed.current.delete("ArrowRight");
  };

  const resetGame = () => {
    setNinjaPos({ x: 50, y: 450 });
    setVelocity({ x: 0, y: 0 });
    setIsJumping(false);
    setHasWon(false);
    setScore(0);
    keysPressed.current.clear();
  };

//   const goToNextLevel = () => {
//     navigate('/games/cyber-ninja/2');
//   };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-6xl mb-4">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-4 shadow-lg shadow-green-500/20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                title="Back to Home"
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50"
              >
                <ArrowLeft color="white" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  LEVEL 1: BEGINNER'S GATE
                </h1>
                <p className="text-xs text-green-300/70">
                  Learn the basics - Simple platforming
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-green-300/70 uppercase tracking-wider">
                Time
              </div>
              <div className="text-2xl font-bold text-green-400 font-mono">
                {(score / 10).toFixed(1)}s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Container */}
      <div className="relative w-full max-w-6xl">
        <div className="relative w-full aspect-[2/1] bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-xl border-2 border-green-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20">
          {/* Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                opacity: 0.1,
              }}
            ></div>
          </div>

          {/* Ground */}
          <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-green-900/30 to-transparent border-t-2 border-green-500/30"></div>

          {/* Platforms */}
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="absolute bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border-2 border-green-400/50 shadow-lg shadow-green-500/30 rounded-lg"
              style={{
                left: `${(platform.x / 1000) * 100}%`,
                top: `${(platform.y / 500) * 100}%`,
                width: `${(platform.width / 1000) * 100}%`,
                height: `${(platform.height / 500) * 100}%`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent"></div>
            </div>
          ))}

          {/* Door */}
          <div
            className="absolute bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 backdrop-blur-sm border-4 border-emerald-400/60 shadow-2xl shadow-emerald-500/50 rounded-lg flex items-center justify-center"
            style={{
              left: `${(door.x / 1000) * 100}%`,
              top: `${(door.y / 500) * 100}%`,
              width: `${(door.width / 1000) * 100}%`,
              height: `${(door.height / 500) * 100}%`,
            }}
          >
            <div className="w-1/4 h-3/4 bg-emerald-400/40 rounded animate-pulse"></div>
          </div>

          {/* Ninja */}
          <div
            className="absolute bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-green-500/50 rounded-lg shadow-xl shadow-green-500/50 transition-transform duration-75"
            style={{
              left: `${(ninjaPos.x / 1000) * 100}%`,
              top: `${(ninjaPos.y / 500) * 100}%`,
              width: `${(NINJA_SIZE / 1000) * 100}%`,
              height: `${(NINJA_SIZE / 500) * 100}%`,
            }}
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg"></div>
          </div>

          {/* Win overlay */}
          {hasWon && (
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <div className="inline-block">
                  <div className="text-7xl mb-4 animate-bounce">🎉</div>
                </div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  LEVEL COMPLETE!
                </h2>
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 shadow-2xl">
                  <p className="text-2xl text-emerald-300 mb-2">Completion Time</p>
                  <p className="text-5xl font-bold text-cyan-400 font-mono">
                    {(score / 10).toFixed(1)}s
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105"
                  >
                    PLAY AGAIN
                  </button>
                  {/* <button
                    onClick={goToNextLevel}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
                  >
                    NEXT LEVEL
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            onTouchStart={handleMoveLeft}
            onTouchEnd={handleStopMove}
            onMouseDown={handleMoveLeft}
            onMouseUp={handleStopMove}
            onMouseLeave={handleStopMove}
            className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-green-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-green-500/30 active:scale-95 transition-transform"
          >
            ←
          </button>
          <button
            onTouchStart={handleJump}
            onMouseDown={handleJump}
            className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 backdrop-blur-sm border-2 border-emerald-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform"
          >
            ↑
          </button>
          <button
            onTouchStart={handleMoveRight}
            onTouchEnd={handleStopMove}
            onMouseDown={handleMoveRight}
            onMouseUp={handleStopMove}
            onMouseLeave={handleStopMove}
            className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-green-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-green-500/30 active:scale-95 transition-transform"
          >
            →
          </button>
        </div>

        {/* Controls Info */}
        <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 shadow-lg">
          <p className="text-center text-green-300 font-semibold mb-2">
            CONTROLS - LEVEL 1
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-green-300/70">
            <span className="hidden md:inline">← → or A/D: Move</span>
            <span className="hidden md:inline">↑ or W or Space: Jump</span>
            <span className="md:hidden">Use buttons below to control</span>
          </div>
          <p className="text-center text-emerald-300/70 text-xs mt-2">
            Reach the glowing door to complete the level
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberNinja;
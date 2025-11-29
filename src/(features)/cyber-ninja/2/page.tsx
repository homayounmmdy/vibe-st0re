import { ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
  moving?: boolean;
  speed?: number;
  minX?: number;
  maxX?: number;
}

const CyberNinjaLevel2: React.FC = () => {
  const [ninjaPos, setNinjaPos] = useState<Position>({ x: 50, y: 450 });
  const [velocity, setVelocity] = useState<Position>({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [hasFallen, setHasFallen] = useState(false);
  const [score, setScore] = useState(0);
  const [platformPositions, setPlatformPositions] = useState<{[key: number]: number}>({});
  const keysPressed = useRef<Set<string>>(new Set());

  const NINJA_SIZE = 30;
  const GRAVITY = 0.5;
  const JUMP_STRENGTH = -12;
  const MOVE_SPEED = 6;
  const GROUND_Y = 450;
  const DEATH_Y = 550;

  // Level 2: Harder platforms with gaps, moving platforms, and precise jumps
  const platforms: Platform[] = [
    { x: 200, y: 400, width: 100, height: 20 },
    { x: 350, y: 350, width: 80, height: 20, moving: true, speed: 2, minX: 350, maxX: 450 },
    { x: 580, y: 320, width: 90, height: 20 },
    { x: 720, y: 280, width: 70, height: 20, moving: true, speed: 1.5, minX: 720, maxX: 800 },
    { x: 600, y: 220, width: 85, height: 20 },
    { x: 780, y: 160, width: 80, height: 20 },
    { x: 900, y: 200, width: 90, height: 20 },
  ];

  const door = { x: 920, y: 120, width: 50, height: 80 };

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
      if (!hasWon && !hasFallen) {
        setScore((prev) => prev + 1);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [hasWon, hasFallen]);

  // Update moving platforms
  useEffect(() => {
    const movingPlatformLoop = setInterval(() => {
      setPlatformPositions((prev) => {
        const newPositions = { ...prev };
        platforms.forEach((platform, idx) => {
          if (platform.moving && platform.speed && platform.minX !== undefined && platform.maxX !== undefined) {
            const currentX = newPositions[idx] ?? platform.x;
            const direction = newPositions[`${idx}_dir`] ?? 1;
            
            let newX = currentX + (platform.speed * direction);
            let newDir = direction;
            
            if (newX >= platform.maxX) {
              newX = platform.maxX;
              newDir = -1;
            } else if (newX <= platform.minX) {
              newX = platform.minX;
              newDir = 1;
            }
            
            newPositions[idx] = newX;
            newPositions[`${idx}_dir`] = newDir;
          }
        });
        return newPositions;
      });
    }, 1000 / 60);

    return () => clearInterval(movingPlatformLoop);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (hasFallen) return;

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

        // Check death (falling off)
        if (newY >= DEATH_Y) {
          setHasFallen(true);
          return prev;
        }

        // Check ground collision (limited ground area)
        if (newY >= GROUND_Y && newX < 150) {
          newY = GROUND_Y;
          newVelY = 0;
          jumping = false;
        }

        // Check platform collisions
        let onPlatform = false;
        for (let i = 0; i < platforms.length; i++) {
          const platform = platforms[i];
          const platformX = platformPositions[i] ?? platform.x;
          
          if (
            newX + NINJA_SIZE > platformX &&
            newX < platformX + platform.width &&
            newY + NINJA_SIZE >= platform.y &&
            newY + NINJA_SIZE <= platform.y + platform.height &&
            velocity.y >= 0
          ) {
            newY = platform.y - NINJA_SIZE;
            newVelY = 0;
            jumping = false;
            onPlatform = true;
            
            // Move with platform
            if (platform.moving) {
              const prevPlatformX = platformPositions[i] ?? platform.x;
              const platformDelta = platformX - prevPlatformX;
              newX += platformDelta;
              newX = Math.max(0, Math.min(950, newX));
            }
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
        }

        return { x: newX, y: newY };
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [velocity, isJumping, hasFallen, platformPositions]);

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
    setHasFallen(false);
    setScore(0);
    setPlatformPositions({});
    keysPressed.current.clear();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-6xl mb-4">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4 shadow-lg shadow-orange-500/20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.history.back()}
                title="Back to Levels"
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50"
              >
                <ArrowLeft color="white" />
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  LEVEL 2: MOVING HAZARD
                </h1>
                <p className="text-xs text-orange-300/70">
                  Harder jumps - Moving platforms - Don't fall!
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-orange-300/70 uppercase tracking-wider">
                Time
              </div>
              <div className="text-2xl font-bold text-orange-400 font-mono">
                {(score / 10).toFixed(1)}s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Container */}
      <div className="relative w-full max-w-6xl">
        <div className="relative w-full aspect-[2/1] bg-gradient-to-b from-slate-900/50 to-red-950/50 backdrop-blur-xl border-2 border-orange-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
          {/* Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(orange 1px, transparent 1px), linear-gradient(90deg, orange 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                opacity: 0.1,
              }}
            ></div>
          </div>

          {/* Limited Ground */}
          <div className="absolute bottom-0 left-0 w-[15%] h-[10%] bg-gradient-to-t from-orange-900/30 to-transparent border-t-2 border-r-2 border-orange-500/30"></div>

          {/* Death Zone Indicator */}
          <div className="absolute bottom-0 left-[15%] right-0 h-[10%] bg-gradient-to-t from-red-900/40 to-transparent border-t-2 border-red-500/50">
            <div className="absolute inset-0 flex items-center justify-center text-red-400/50 text-xs font-bold">
              ⚠ DANGER ZONE ⚠
            </div>
          </div>

          {/* Platforms */}
          {platforms.map((platform, idx) => {
            const platformX = platformPositions[idx] ?? platform.x;
            return (
              <div
                key={idx}
                className={`absolute bg-gradient-to-br ${
                  platform.moving 
                    ? 'from-orange-500/30 to-red-500/30 border-orange-400/60' 
                    : 'from-orange-500/20 to-red-500/20 border-orange-400/50'
                } backdrop-blur-sm border-2 shadow-lg shadow-orange-500/30 rounded-lg transition-all duration-75`}
                style={{
                  left: `${(platformX / 1000) * 100}%`,
                  top: `${(platform.y / 500) * 100}%`,
                  width: `${(platform.width / 1000) * 100}%`,
                  height: `${(platform.height / 500) * 100}%`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-transparent"></div>
                {platform.moving && (
                  <div className="absolute inset-0 animate-pulse bg-orange-400/10"></div>
                )}
              </div>
            );
          })}

          {/* Door */}
          <div
            className="absolute bg-gradient-to-br from-orange-500/30 to-yellow-500/30 backdrop-blur-sm border-4 border-orange-400/60 shadow-2xl shadow-orange-500/50 rounded-lg flex items-center justify-center"
            style={{
              left: `${(door.x / 1000) * 100}%`,
              top: `${(door.y / 500) * 100}%`,
              width: `${(door.width / 1000) * 100}%`,
              height: `${(door.height / 500) * 100}%`,
            }}
          >
            <div className="w-1/4 h-3/4 bg-orange-400/40 rounded animate-pulse"></div>
          </div>

          {/* Ninja */}
          {!hasFallen && (
            <div
              className="absolute bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-orange-500/50 rounded-lg shadow-xl shadow-orange-500/50 transition-transform duration-75"
              style={{
                left: `${(ninjaPos.x / 1000) * 100}%`,
                top: `${(ninjaPos.y / 500) * 100}%`,
                width: `${(NINJA_SIZE / 1000) * 100}%`,
                height: `${(NINJA_SIZE / 500) * 100}%`,
              }}
            >
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg"></div>
            </div>
          )}

          {/* Fallen overlay */}
          {hasFallen && (
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <div className="inline-block">
                  <div className="text-7xl mb-4">💀</div>
                </div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  YOU FELL!
                </h2>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 shadow-2xl">
                  <p className="text-2xl text-red-300 mb-2">Time Survived</p>
                  <p className="text-5xl font-bold text-orange-400 font-mono">
                    {(score / 10).toFixed(1)}s
                  </p>
                </div>
                <button
                  onClick={resetGame}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-red-500/50 hover:scale-105"
                >
                  TRY AGAIN
                </button>
              </div>
            </div>
          )}

          {/* Win overlay */}
          {hasWon && (
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="text-center space-y-6 p-8">
                <div className="inline-block">
                  <div className="text-7xl mb-4 animate-bounce">🎉</div>
                </div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  LEVEL COMPLETE!
                </h2>
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 shadow-2xl">
                  <p className="text-2xl text-orange-300 mb-2">Completion Time</p>
                  <p className="text-5xl font-bold text-yellow-400 font-mono">
                    {(score / 10).toFixed(1)}s
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-red-500/50 hover:scale-105"
                  >
                    PLAY AGAIN
                  </button>
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
            className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-red-500/30 backdrop-blur-sm border-2 border-orange-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
          >
            ←
          </button>
          <button
            onTouchStart={handleJump}
            onMouseDown={handleJump}
            className="w-20 h-20 bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm border-2 border-red-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
          >
            ↑
          </button>
          <button
            onTouchStart={handleMoveRight}
            onTouchEnd={handleStopMove}
            onMouseDown={handleMoveRight}
            onMouseUp={handleStopMove}
            onMouseLeave={handleStopMove}
            className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-red-500/30 backdrop-blur-sm border-2 border-orange-400/50 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
          >
            →
          </button>
        </div>

        {/* Controls Info */}
        <div className="mt-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4 shadow-lg">
          <p className="text-center text-orange-300 font-semibold mb-2">
            CONTROLS - LEVEL 2
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-300/70">
            <span className="hidden md:inline">← → or A/D: Move</span>
            <span className="hidden md:inline">↑ or W or Space: Jump</span>
            <span className="md:hidden">Use buttons below to control</span>
          </div>
          <p className="text-center text-red-300/70 text-xs mt-2">
            ⚠ Watch out for moving platforms and don't fall into the void!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberNinjaLevel2;

import React, { useState, useEffect, useRef } from 'react';

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

const NinjaGame: React.FC = () => {
  const [ninjaPos, setNinjaPos] = useState<Position>({ x: 50, y: 450 });
  const [velocity, setVelocity] = useState<Position>({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const keysPressed = useRef<Set<string>>(new Set());

  const NINJA_SIZE = 30;
  const GRAVITY = 0.5;
  const JUMP_STRENGTH = -12;
  const MOVE_SPEED = 5;
  const GROUND_Y = 450;

  const platforms: Platform[] = [
    { x: 200, y: 400, width: 100, height: 20 },
    { x: 350, y: 350, width: 80, height: 20 },
    { x: 500, y: 300, width: 100, height: 20 },
    { x: 650, y: 250, width: 80, height: 20 },
    { x: 800, y: 200, width: 100, height: 20 },
  ];

  const door = { x: 850, y: 120, width: 50, height: 80 };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setNinjaPos(prev => {
        let newX = prev.x;
        let newY = prev.y;
        let newVelY = velocity.y;
        let jumping = isJumping;

        // Horizontal movement
        if (keysPressed.current.has('ArrowRight') || keysPressed.current.has('d')) {
          newX += MOVE_SPEED;
        }
        if (keysPressed.current.has('ArrowLeft') || keysPressed.current.has('a')) {
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
        let onPlatform = false;
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
            onPlatform = true;
            break;
          }
        }

        // Jump
        if ((keysPressed.current.has('ArrowUp') || keysPressed.current.has('w') || keysPressed.current.has(' ')) && !jumping) {
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
  }, [velocity, isJumping]);

  const resetGame = () => {
    setNinjaPos({ x: 50, y: 450 });
    setVelocity({ x: 0, y: 0 });
    setIsJumping(false);
    setHasWon(false);
    keysPressed.current.clear();
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
      <div className="relative">
        <div className="relative w-[1000px] h-[500px] bg-slate-800 border-4 border-slate-700 overflow-hidden">
          {/* Ground */}
          <div className="absolute bottom-0 w-full h-[50px] bg-slate-900"></div>

          {/* Platforms */}
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="absolute bg-slate-700 border-2 border-slate-600"
              style={{
                left: `${platform.x}px`,
                top: `${platform.y}px`,
                width: `${platform.width}px`,
                height: `${platform.height}px`,
              }}
            ></div>
          ))}

          {/* Door */}
          <div
            className="absolute bg-gradient-to-b from-amber-900 to-amber-800 border-4 border-amber-950 flex items-center justify-center"
            style={{
              left: `${door.x}px`,
              top:` ${door.y}px`,
              width: `${door.width}px`,
              height: `${door.height}px`,
            }}
          >
            <div className="w-2 h-8 bg-amber-950 rounded"></div>
          </div>

          {/* Ninja */}
          <div
            className="absolute bg-slate-950 border-2 border-slate-800 rounded transition-transform duration-75"
            style={{
              left: `${ninjaPos.x}px`,
              top: `${ninjaPos.y}px`,
              width: `${NINJA_SIZE}px`,
              height: `${NINJA_SIZE}px`,
            }}
          >
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
          </div>

          {/* Win message */}
          {hasWon && (
            <div className="absolute inset-0 bg-slate-950 bg-opacity-90 flex flex-col items-center justify-center">
              <h2 className="text-6xl font-bold text-emerald-400 mb-4">YOU WIN!</h2>
              <p className="text-xl text-slate-300 mb-6">The ninja has reached the door!</p>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-4 text-center text-slate-300">
          <p className="text-lg font-semibold mb-2">Controls:</p>
          <p>Arrow Keys or WASD to move • Space or Up Arrow to jump</p>
          <p className="text-sm text-slate-400 mt-2">Reach the door at the end to win!</p>
        </div>
      </div>
    </div>
  );
};

export default NinjaGame;

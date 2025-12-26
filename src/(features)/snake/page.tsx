import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// Game constants
const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const MIN_SPEED = 70;
const MAX_SPEED = 300;
const CELL_SIZE = 20;

// Types
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type FoodType = 'APPLE' | 'BANANA' | 'SLIME' | 'BOMB';
type Position = { x: number; y: number };

interface Food {
  position: Position;
  type: FoodType;
}

interface SnakeSegment extends Position {}

const Snake: React.FC = () => {
  // Game state
  const [snake, setSnake] = useState<SnakeSegment[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [nextDirection, setNextDirection] = useState<Direction>('RIGHT');
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Food configurations
  const foodConfigs = {
    APPLE: { points: 10, color: 'bg-red-500', effect: 'none' },
    BANANA: { points: 15, color: 'bg-yellow-400', effect: 'speedUp' },
    SLIME: { points: 5, color: 'bg-green-500', effect: 'slowDown' },
    BOMB: { points: 0, color: 'bg-gray-800', effect: 'explode' }
  };

  // Initialize game
  const initGame = useCallback(() => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ]);
    setFoods([]);
    setDirection('RIGHT');
    setNextDirection('RIGHT');
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setGameOver(false);
    setShowStartScreen(false);
    setGameRunning(true);
  }, []);

  // Generate random food
  const generateFood = useCallback((): Food => {
    // Determine food type probabilities
    const rand = Math.random();
    let foodType: FoodType;
    
    if (rand < 0.7) foodType = 'APPLE';
    else if (rand < 0.85) foodType = 'BANANA';
    else if (rand < 0.95) foodType = 'SLIME';
    else foodType = 'BOMB';
    
    // Find empty position
    let position: Position;
    let positionFound = false;
    
    while (!positionFound) {
      position = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      
      // Check if position is not occupied by snake or other food
      positionFound = true;
      
      // Check snake collision
      for (const segment of snake) {
        if (segment.x === position.x && segment.y === position.y) {
          positionFound = false;
          break;
        }
      }
      
      // Check food collision
      if (positionFound) {
        for (const food of foods) {
          if (food.position.x === position.x && food.position.y === position.y) {
            positionFound = false;
            break;
          }
        }
      }
    }
    
    return { position, type: foodType };
  }, [snake, foods]);

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!gameRunning || gameOver) return;
    
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') setNextDirection('UP');
        break;
      case 'ArrowDown':
        if (direction !== 'UP') setNextDirection('DOWN');
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') setNextDirection('LEFT');
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') setNextDirection('RIGHT');
        break;
    }
  }, [direction, gameRunning, gameOver]);

  // Move snake
  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;
    
    setDirection(nextDirection);
    
    // Calculate new head position
    const head = { ...snake[0] };
    
    switch (nextDirection) {
      case 'UP': head.y--; break;
      case 'DOWN': head.y++; break;
      case 'LEFT': head.x--; break;
      case 'RIGHT': head.x++; break;
    }
    
    // Check wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      setGameRunning(false);
      return;
    }
    
    // Check self collision
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        setGameOver(true);
        setGameRunning(false);
        return;
      }
    }
    
    // Create new snake with new head
    const newSnake = [head, ...snake];
    
    // Check food collision
    let foodEaten = false;
    let newFoods = [...foods];
    let newScore = score;
    let newSpeed = speed;
    
    for (let i = 0; i < newFoods.length; i++) {
      if (newFoods[i].position.x === head.x && newFoods[i].position.y === head.y) {
        const foodConfig = foodConfigs[newFoods[i].type];
        
        // Handle bomb
        if (foodConfig.effect === 'explode') {
          setGameOver(true);
          setGameRunning(false);
          return;
        }
        
        // Apply speed effects
        if (foodConfig.effect === 'speedUp') {
          newSpeed = Math.max(MIN_SPEED, speed - 20);
        } else if (foodConfig.effect === 'slowDown') {
          newSpeed = Math.min(MAX_SPEED, speed + 20);
        }
        
        // Update score
        newScore += foodConfig.points;
        foodEaten = true;
        
        // Remove eaten food
        newFoods.splice(i, 1);
        break;
      }
    }
    
    // Remove tail if no food eaten
    if (!foodEaten) {
      newSnake.pop();
    }
    
    // Update state
    setSnake(newSnake);
    setFoods(newFoods);
    setScore(newScore);
    
    // Update speed if changed
    if (newSpeed !== speed) {
      setSpeed(newSpeed);
    }
    
    // Generate new food occasionally
    if (newFoods.length < 3 && Math.random() < 0.3) {
      const newFood = generateFood();
      setFoods(prev => [...prev, newFood]);
    }
  }, [snake, foods, nextDirection, gameRunning, gameOver, score, speed, generateFood, foodConfigs]);

  // Game loop
  useEffect(() => {
    if (gameRunning && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, speed);
    }
    
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameRunning, gameOver, moveSnake, speed]);

  // Keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Initial food generation
  useEffect(() => {
    if (gameRunning && foods.length === 0) {
      setFoods([generateFood()]);
    }
  }, [gameRunning, foods.length, generateFood]);

  // Touch controls
  const handleDirection = (dir: Direction) => {
    if (!gameRunning || gameOver) return;
    
    // Prevent 180-degree turns
    if (
      (dir === 'UP' && direction !== 'DOWN') ||
      (dir === 'DOWN' && direction !== 'UP') ||
      (dir === 'LEFT' && direction !== 'RIGHT') ||
      (dir === 'RIGHT' && direction !== 'LEFT')
    ) {
      setNextDirection(dir);
    }
  };

  // Render game cell
  const renderCell = (x: number, y: number) => {
    // Check if snake segment
    const snakeSegment = snake.find(segment => segment.x === x && segment.y === y);
    
    // Check if food
    const food = foods.find(f => f.position.x === x && f.position.y === y);
    
    if (snakeSegment) {
      // Head or body?
      const isHead = snakeSegment === snake[0];
      return (
        <div 
          key={`${x}-${y}`}
          className={`absolute rounded-sm ${
            isHead 
              ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]' 
              : 'bg-blue-400'
          }`}
          style={{
            left: x * CELL_SIZE,
            top: y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE
          }}
        />
      );
    }
    
    if (food) {
      const config = foodConfigs[food.type];
      const isBomb = food.type === 'BOMB';
      return (
        <div 
          key={`${x}-${y}`}
          className={`absolute rounded-full ${
            config.color
          } ${isBomb ? 'animate-pulse' : ''}`}
          style={{
            left: x * CELL_SIZE,
            top: y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE
          }}
        />
      );
    }
    
    return null;
  };

  // Calculate speed multiplier
  const speedMultiplier = (INITIAL_SPEED / speed).toFixed(1);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="flex gap-2 items-center justify-center mb-6">
            <Link to="/">
              <ArrowLeft className="w-8 h-8 text-blue-600" />
            </Link>
             <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Modern Snake Game
        </h1>
          </div>
       
        <p className="text-center text-gray-400 mb-6">Collect fruits, avoid bombs!</p>
        
        {/* Game Stats */}
        <div className="flex justify-between mb-4 bg-slate-800 p-4 rounded-xl">
          <div className="text-center">
            <div className="text-sm text-gray-400">Score</div>
            <div className="text-xl font-bold">{score}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Speed</div>
            <div className="text-xl font-bold">{speedMultiplier}x</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Length</div>
            <div className="text-xl font-bold">{snake.length}</div>
          </div>
        </div>
        
        {/* Game Board */}
        <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl mx-auto"
          style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
          
          {/* Grid background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1e293b 1px, transparent 1px),
                linear-gradient(to bottom, #1e293b 1px, transparent 1px)
              `,
              backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
            }}
          />
          
          {/* Game elements */}
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            return renderCell(x, y);
          })}
          
          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-red-500 mb-4">Game Over!</h2>
              <p className="text-xl mb-2">Final Score: <span className="font-bold">{score}</span></p>
              <button 
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-white hover:opacity-90 transition-opacity"
                onClick={initGame}
              >
                Play Again
              </button>
            </div>
          )}
          
          {/* Start Screen */}
          {showStartScreen && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Snake Game</h2>
              <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-xs">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                  <span>Apple - +10 pts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-400 rounded-sm mr-2"></div>
                  <span>Banana - Speed Up</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                  <span>Slime - Slow Down</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-800 rounded-full mr-2"></div>
                  <span>Bomb - Game Over!</span>
                </div>
              </div>
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-white text-xl hover:opacity-90 transition-opacity"
                onClick={initGame}
              >
                Start Game
              </button>
            </div>
          )}
        </div>
        
        {/* Controls */}
        <div className="mt-6 flex flex-col items-center">
          <div className="flex space-x-4 mb-4 md:hidden">
            <button 
              className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl active:bg-slate-800 active:scale-95 transition"
              onClick={() => handleDirection('UP')}
            >
              ↑
            </button>
            <div className="flex flex-col space-y-4">
              <button 
                className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl active:bg-slate-800 active:scale-95 transition"
                onClick={() => handleDirection('LEFT')}
              >
                ←
              </button>
              <button 
                className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl active:bg-slate-800 active:scale-95 transition"
                onClick={() => handleDirection('RIGHT')}
              >
                →
              </button>
            </div>
            <button 
              className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl active:bg-slate-800 active:scale-95 transition"
              onClick={() => handleDirection('DOWN')}
            >
              ↓
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">Use arrow keys or on-screen buttons to control the snake</p>
        </div>
      </div>
    </div>
  );
};

export default Snake;
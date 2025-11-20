import React, { useState, useEffect, useCallback } from 'react';
import {ArrowLeft} from "lucide-react";
import {Link} from "react-router-dom";

type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';
type Cell = TetrominoType | null;
type Board = Cell[][];

interface Position {
    x: number;
    y: number;
}

interface Tetromino {
    shape: number[][];
    type: TetrominoType;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const EMPTY_BOARD: Board = Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null));

const TETROMINOES: Record<TetrominoType, number[][]> = {
    I: [[1, 1, 1, 1]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    Z: [[1, 1, 0], [0, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]]
};

const COLORS: Record<TetrominoType, string> = {
    I: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    O: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    T: 'bg-gradient-to-br from-purple-400 to-purple-600',
    S: 'bg-gradient-to-br from-green-400 to-green-600',
    Z: 'bg-gradient-to-br from-red-400 to-red-600',
    J: 'bg-gradient-to-br from-blue-400 to-blue-600',
    L: 'bg-gradient-to-br from-orange-400 to-orange-600'
};

const getRandomTetromino = (): Tetromino => {
    const types: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    const type = types[Math.floor(Math.random() * types.length)];
    return { shape: TETROMINOES[type], type };
};

export default function Tetris() {
    const [board, setBoard] = useState<Board>(EMPTY_BOARD);
    const [currentPiece, setCurrentPiece] = useState<Tetromino>(getRandomTetromino());
    const [position, setPosition] = useState<Position>({ x: 3, y: 0 });
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [level, setLevel] = useState(1);

    const isColliding = useCallback((piece: Tetromino, pos: Position, currentBoard: Board): boolean => {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const newX = pos.x + x;
                    const newY = pos.y + y;
                    if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) return true;
                    if (newY >= 0 && currentBoard[newY][newX]) return true;
                }
            }
        }
        return false;
    }, []);

    const mergePiece = useCallback((currentBoard: Board, piece: Tetromino, pos: Position): Board => {
        const newBoard = currentBoard.map(row => [...row]);
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const boardY = pos.y + y;
                    const boardX = pos.x + x;
                    if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                        newBoard[boardY][boardX] = piece.type;
                    }
                }
            }
        }
        return newBoard;
    }, []);

    const clearLines = useCallback((currentBoard: Board): { board: Board; linesCleared: number } => {
        let linesCleared = 0;
        const newBoard = currentBoard.filter(row => {
            if (row.every(cell => cell !== null)) {
                linesCleared++;
                return false;
            }
            return true;
        });
        while (newBoard.length < BOARD_HEIGHT) {
            newBoard.unshift(Array(BOARD_WIDTH).fill(null));
        }
        return { board: newBoard, linesCleared };
    }, []);

    const rotatePiece = useCallback((piece: Tetromino): Tetromino => {
        const rotated = piece.shape[0].map((_, i) =>
            piece.shape.map(row => row[i]).reverse()
        );
        return { ...piece, shape: rotated };
    }, []);

    const moveDown = useCallback(() => {
        if (gameOver || isPaused) return;

        const newPos = { ...position, y: position.y + 1 };
        if (!isColliding(currentPiece, newPos, board)) {
            setPosition(newPos);
        } else {
            const mergedBoard = mergePiece(board, currentPiece, position);
            const { board: clearedBoard, linesCleared } = clearLines(mergedBoard);

            if (linesCleared > 0) {
                const points = [0, 100, 300, 500, 800][linesCleared];
                setScore(s => s + points * level);
                setLevel(l => Math.floor(score / 1000) + 1);
            }

            setBoard(clearedBoard);
            const newPiece = getRandomTetromino();
            const startPos = { x: 3, y: 0 };

            if (isColliding(newPiece, startPos, clearedBoard)) {
                setGameOver(true);
            } else {
                setCurrentPiece(newPiece);
                setPosition(startPos);
            }
        }
    }, [board, currentPiece, position, gameOver, isPaused, isColliding, mergePiece, clearLines, level, score]);

    const move = useCallback((dx: number) => {
        if (gameOver || isPaused) return;
        const newPos = { ...position, x: position.x + dx };
        if (!isColliding(currentPiece, newPos, board)) {
            setPosition(newPos);
        }
    }, [board, currentPiece, position, gameOver, isPaused, isColliding]);

    const rotate = useCallback(() => {
        if (gameOver || isPaused) return;
        const rotated = rotatePiece(currentPiece);
        if (!isColliding(rotated, position, board)) {
            setCurrentPiece(rotated);
        }
    }, [board, currentPiece, position, gameOver, isPaused, isColliding, rotatePiece]);

    const hardDrop = useCallback(() => {
        if (gameOver || isPaused) return;
        let newPos = { ...position };
        while (!isColliding(currentPiece, { ...newPos, y: newPos.y + 1 }, board)) {
            newPos.y++;
        }
        setPosition(newPos);
        moveDown();
    }, [board, currentPiece, position, gameOver, isPaused, isColliding, moveDown]);

    const resetGame = () => {
        setBoard(EMPTY_BOARD);
        setCurrentPiece(getRandomTetromino());
        setPosition({ x: 3, y: 0 });
        setScore(0);
        setLevel(1);
        setGameOver(false);
        setIsPaused(false);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') move(-1);
            else if (e.key === 'ArrowRight') move(1);
            else if (e.key === 'ArrowDown') moveDown();
            else if (e.key === 'ArrowUp' || e.key === ' ') rotate();
            else if (e.key === 'Enter') hardDrop();
            else if (e.key === 'p' || e.key === 'P') setIsPaused(p => !p);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [move, moveDown, rotate, hardDrop]);

    useEffect(() => {
        if (gameOver || isPaused) return;
        const speed = Math.max(100, 1000 - (level - 1) * 100);
        const interval = setInterval(moveDown, speed);
        return () => clearInterval(interval);
    }, [moveDown, gameOver, isPaused, level]);

    const renderBoard = () => {
        const displayBoard = board.map(row => [...row]);

        for (let y = 0; y < currentPiece.shape.length; y++) {
            for (let x = 0; x < currentPiece.shape[y].length; x++) {
                if (currentPiece.shape[y][x]) {
                    const boardY = position.y + y;
                    const boardX = position.x + x;
                    if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                        displayBoard[boardY][boardX] = currentPiece.type;
                    }
                }
            }
        }

        return displayBoard.map((row, y) => (
            <div key={y} className="flex">
                {row.map((cell, x) => (
                    <div
                        key={x}
                        className={`w-8 h-8 md:w-7 md:h-7 border border-white/10 ${
                            cell ? COLORS[cell] + ' shadow-lg' : 'bg-black/20'
                        } transition-all duration-100`}
                    />
                ))}
            </div>
        ));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-2 sm:p-4">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-center lg:items-start justify-center">
                {/* Stats Panel - Top on Mobile, Left on Desktop */}
                <div className="w-full lg:w-56 xl:w-64 order-1 lg:order-1">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-6">
                        <div className="text-white space-y-4">
                            <div className="text-center">
                                <h2 className="text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Score</h2>
                                <p className="text-3xl sm:text-4xl font-bold font-mono bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">{score}</p>
                            </div>

                            <div className="text-center">
                                <h2 className="text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Level</h2>
                                <p className="text-3xl sm:text-4xl font-bold font-mono bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">{level}</p>
                            </div>

                            <div className="space-y-2 pt-4">
                                <button
                                    onClick={() => setIsPaused(p => !p)}
                                    className="w-full backdrop-blur-lg bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/50 text-yellow-100 px-4 py-2.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg"
                                >
                                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                                </button>

                                <button
                                    onClick={resetGame}
                                    className="w-full backdrop-blur-lg bg-green-500/20 hover:bg-green-500/30 border border-green-400/50 text-green-100 px-4 py-2.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-lg"
                                >
                                    🔄 New Game
                                </button>
                            </div>

                            <div className="pt-4 border-t border-white/20 text-xs sm:text-sm hidden lg:block">
                                <h3 className="font-bold mb-2 text-purple-200">Keyboard Controls</h3>
                                <div className="space-y-1 text-white/80">
                                    <p>← → Move</p>
                                    <p>↑ / Space: Rotate</p>
                                    <p>↓ Soft Drop</p>
                                    <p>Enter: Hard Drop</p>
                                    <p>P: Pause</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Game Board - Center */}
                <div className="order-2">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wider">
                            <Link to="/">
                                <ArrowLeft className="w-8 h-8 text-white" />
                            </Link>
                            TETRIS
                        </h1>

                        <div className="mb-3 sm:mb-4 border-4 border-white/30 rounded-xl overflow-hidden backdrop-blur-sm bg-black/30 shadow-inner">
                            {renderBoard()}
                        </div>

                        {/* Mobile Controls */}
                        <div className="lg:hidden space-y-2">
                            <div className="flex gap-2 justify-center">
                                <button
                                    onTouchStart={() => rotate()}
                                    onClick={rotate}
                                    className="backdrop-blur-lg bg-purple-500/30 active:bg-purple-500/50 border border-purple-400/50 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all active:scale-95 shadow-lg"
                                >
                                    ↻
                                </button>
                                <button
                                    onTouchStart={() => hardDrop()}
                                    onClick={hardDrop}
                                    className="backdrop-blur-lg bg-red-500/30 active:bg-red-500/50 border border-red-400/50 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all active:scale-95 shadow-lg"
                                >
                                    ⬇
                                </button>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <button
                                    onTouchStart={() => move(-1)}
                                    onClick={() => move(-1)}
                                    className="backdrop-blur-lg bg-blue-500/30 active:bg-blue-500/50 border border-blue-400/50 text-white px-8 py-4 rounded-xl font-bold text-2xl transition-all active:scale-95 shadow-lg flex-1"
                                >
                                    ←
                                </button>
                                <button
                                    onTouchStart={() => moveDown()}
                                    onClick={moveDown}
                                    className="backdrop-blur-lg bg-blue-500/30 active:bg-blue-500/50 border border-blue-400/50 text-white px-8 py-4 rounded-xl font-bold text-2xl transition-all active:scale-95 shadow-lg flex-1"
                                >
                                    ↓
                                </button>
                                <button
                                    onTouchStart={() => move(1)}
                                    onClick={() => move(1)}
                                    className="backdrop-blur-lg bg-blue-500/30 active:bg-blue-500/50 border border-blue-400/50 text-white px-8 py-4 rounded-xl font-bold text-2xl transition-all active:scale-95 shadow-lg flex-1"
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        {/* Desktop Controls Helper */}
                        <div className="hidden lg:flex gap-2 justify-center mt-4 text-white/60 text-sm">
                            <span className="backdrop-blur-lg bg-white/5 px-3 py-1 rounded-lg border border-white/10">Use Arrow Keys</span>
                        </div>
                    </div>
                </div>

                {/* Next Piece Panel - Bottom on Mobile, Right on Desktop */}
                <div className="w-full lg:w-56 xl:w-64 order-3">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-center text-white bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                            Game Info
                        </h3>
                        <div className="text-white/80 text-xs sm:text-sm space-y-2">
                            <div className="backdrop-blur-lg bg-white/5 p-3 rounded-xl border border-white/10">
                                <p className="font-semibold text-cyan-300 mb-1">Scoring:</p>
                                <p>1 Line: 100 pts</p>
                                <p>2 Lines: 300 pts</p>
                                <p>3 Lines: 500 pts</p>
                                <p>4 Lines: 800 pts</p>
                            </div>
                            <div className="backdrop-blur-lg bg-white/5 p-3 rounded-xl border border-white/10">
                                <p className="font-semibold text-purple-300 mb-1">Tips:</p>
                                <p>• Clear multiple lines for more points</p>
                                <p>• Speed increases with level</p>
                                <p>• Plan your moves ahead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Over Modal */}
            {gameOver && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/30 p-6 sm:p-8 md:p-10 rounded-3xl text-center max-w-md w-full shadow-2xl animate-pulse">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">
                            Game Over!
                        </h2>
                        <p className="text-2xl sm:text-3xl text-white/90 mb-6 font-mono">
                            Score: <span className="font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">{score}</span>
                        </p>
                        <button
                            onClick={resetGame}
                            className="backdrop-blur-lg bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 border border-green-400/50 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-lg w-full"
                        >
                            🎮 Play Again
                        </button>
                    </div>
                </div>
            )}

            {/* Pause Modal */}
            {isPaused && !gameOver && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/30 p-6 sm:p-8 md:p-10 rounded-3xl text-center max-w-md w-full shadow-2xl">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            ⏸ Paused
                        </h2>
                        <button
                            onClick={() => setIsPaused(false)}
                            className="backdrop-blur-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 border border-blue-400/50 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-lg w-full"
                        >
                            ▶ Resume Game
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
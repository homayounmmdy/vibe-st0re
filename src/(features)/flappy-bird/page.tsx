import React, { useState, useEffect, useCallback, useRef } from 'react';
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const GRAVITY = 0.6;
const JUMP_STRENGTH = -10;
const PIPE_WIDTH = 60;
const PIPE_GAP = 180;
const PIPE_SPEED = 3;
const BIRD_SIZE = 40;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;

interface Pipe {
    x: number;
    topHeight: number;
}

const FlappyBird: React.FC = () => {
    const [birdY, setBirdY] = useState(GAME_HEIGHT / 2);
    const [birdVelocity, setBirdVelocity] = useState(0);
    const [pipes, setPipes] = useState<Pipe[]>([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    // @ts-ignore
    const frameRef = useRef<number>();

    const jump = useCallback(() => {
        if (!gameStarted) {
            setGameStarted(true);
            setBirdVelocity(JUMP_STRENGTH);
        } else if (!gameOver) {
            setBirdVelocity(JUMP_STRENGTH);
        }
    }, [gameStarted, gameOver]);

    const resetGame = () => {
        setBirdY(GAME_HEIGHT / 2);
        setBirdVelocity(0);
        setPipes([]);
        setGameStarted(false);
        setGameOver(false);
        setScore(0);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (gameOver) {
                    resetGame();
                } else {
                    jump();
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [jump, gameOver]);

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const gameLoop = () => {
            // Update bird physics
            setBirdVelocity(v => v + GRAVITY);
            setBirdY(y => {
                const newY = y + birdVelocity;

                // Check ground and ceiling collision
                if (newY > GAME_HEIGHT - BIRD_SIZE || newY < 0) {
                    setGameOver(true);
                    return y;
                }

                return newY;
            });

            // Update pipes
            setPipes(prevPipes => {
                let newPipes = prevPipes.map(pipe => ({
                    ...pipe,
                    x: pipe.x - PIPE_SPEED
                })).filter(pipe => pipe.x > -PIPE_WIDTH);

                // Add new pipe
                if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < GAME_WIDTH - 250) {
                    const topHeight = Math.random() * (GAME_HEIGHT - PIPE_GAP - 100) + 50;
                    newPipes.push({
                        x: GAME_WIDTH,
                        topHeight
                    });
                }

                // Check collision and score
                newPipes.forEach(pipe => {
                    const birdLeft = 50;
                    const birdRight = birdLeft + BIRD_SIZE;
                    const birdTop = birdY;
                    const birdBottom = birdY + BIRD_SIZE;

                    const pipeLeft = pipe.x;
                    const pipeRight = pipe.x + PIPE_WIDTH;

                    // Check if bird passed pipe for scoring
                    // @ts-ignore
                    if (pipe.x + PIPE_WIDTH < birdLeft && !pipe.scored) {
                        setScore(s => s + 1);
                        // @ts-ignore
                        pipe.scored = true;
                    }

                    // Check collision
                    if (birdRight > pipeLeft && birdLeft < pipeRight) {
                        if (birdTop < pipe.topHeight || birdBottom > pipe.topHeight + PIPE_GAP) {
                            setGameOver(true);
                        }
                    }
                });

                return newPipes;
            });

            frameRef.current = requestAnimationFrame(gameLoop);
        };

        frameRef.current = requestAnimationFrame(gameLoop);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [gameStarted, gameOver, birdVelocity, birdY]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-400 to-sky-300 p-4">
            <div className="flex items-center gap-2 mb-4">
                <Link to="/">
                    <ArrowLeft className="w-8 h-8 text-white" />
                </Link>
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Flappy Bird</h1>
            </div>

            <div
                className="relative overflow-hidden bg-sky-200 border-4 border-yellow-600 rounded-lg shadow-2xl cursor-pointer"
                style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
                onClick={() => gameOver ? resetGame() : jump()}
            >
                {/* Bird */}
                <div
                    className="absolute w-10 h-10 bg-yellow-400 border-2 border-yellow-600 rounded-full transition-transform"
                    style={{
                        left: 50,
                        top: birdY,
                        transform: `rotate(${Math.min(Math.max(birdVelocity * 3, -30), 90)}deg)`
                    }}
                >
                    <div className="absolute w-2 h-2 bg-black rounded-full top-2 right-2"></div>
                    <div className="absolute w-4 h-2 bg-orange-500 rounded-sm top-4 right-0 transform translate-x-1"></div>
                </div>

                {/* Pipes */}
                {pipes.map((pipe, i) => (
                    <React.Fragment key={i}>
                        {/* Top pipe */}
                        <div
                            className="absolute bg-green-600 border-2 border-green-700"
                            style={{
                                left: pipe.x,
                                top: 0,
                                width: PIPE_WIDTH,
                                height: pipe.topHeight
                            }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-500 border-t-2 border-green-700"></div>
                        </div>

                        {/* Bottom pipe */}
                        <div
                            className="absolute bg-green-600 border-2 border-green-700"
                            style={{
                                left: pipe.x,
                                top: pipe.topHeight + PIPE_GAP,
                                width: PIPE_WIDTH,
                                height: GAME_HEIGHT - (pipe.topHeight + PIPE_GAP)
                            }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-8 bg-green-500 border-b-2 border-green-700"></div>
                        </div>
                    </React.Fragment>
                ))}

                {/* Score */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white drop-shadow-lg">
                    {score}
                </div>

                {/* Start screen */}
                {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                        <div className="text-white text-center">
                            <p className="text-2xl font-bold mb-4">Click or Press Space</p>
                            <p className="text-lg">to Start!</p>
                        </div>
                    </div>
                )}

                {/* Game over screen */}
                {gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 text-center shadow-xl">
                            <h2 className="text-3xl font-bold text-red-600 mb-4">Game Over!</h2>
                            <p className="text-2xl mb-2">Score: {score}</p>
                            <button
                                onClick={resetGame}
                                className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4 text-white text-center">
                <p className="text-sm">Click the screen or press SPACE to flap</p>
            </div>
        </div>
    );
};

export default FlappyBird;

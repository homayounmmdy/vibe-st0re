import  { useState } from 'react';
import {ArrowLeft} from "lucide-react";
import {Link} from "react-router-dom";

type Player = 'X' | 'O';
type Square = Player | null;
type Board = Square[];

export default function TicTacToe() {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    const checkWinner = (squares: Board): Player | null => {
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a] as Player;
            }
        }
        return null;
    };

    const checkDraw = (squares: Board): boolean => {
        return squares.every(square => square !== null) && !checkWinner(squares);
    };

    const handleSquareClick = (index: number) => {
        if (board[index] || gameOver) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setGameOver(true);
            if (winner === 'X') {
                setXWins(xWins + 1);
            } else {
                setOWins(oWins + 1);
            }
        } else if (checkDraw(newBoard)) {
            setGameOver(true);
            setDraws(draws + 1);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setGameOver(false);
    };

    const resetAll = () => {
        resetGame();
        setXWins(0);
        setOWins(0);
        setDraws(0);
    };

    const winner = checkWinner(board);
    const isDraw = checkDraw(board);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-md w-full">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    <Link to="/">
                        <ArrowLeft className="w-8 h-8 text-gray-800" />
                    </Link>
                    Tic Tac Toe
                </h1>

                {/* Score Board */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-100 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">X</div>
                        <div className="text-sm text-gray-600">Wins</div>
                        <div className="text-xl font-bold text-gray-800">{xWins}</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-gray-600">-</div>
                        <div className="text-sm text-gray-600">Draws</div>
                        <div className="text-xl font-bold text-gray-800">{draws}</div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-red-600">O</div>
                        <div className="text-sm text-gray-600">Wins</div>
                        <div className="text-xl font-bold text-gray-800">{oWins}</div>
                    </div>
                </div>

                {/* Game Status */}
                <div className="text-center mb-4">
                    {winner ? (
                        <div className="text-2xl font-bold text-green-600">
                            Player {winner} Wins! 🎉
                        </div>
                    ) : isDraw ? (
                        <div className="text-2xl font-bold text-yellow-600">
                            It's a Draw! 🤝
                        </div>
                    ) : (
                        <div className="text-xl font-semibold text-gray-700">
                            Current Turn: <span className={currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'}>
                {currentPlayer}
              </span>
                        </div>
                    )}
                </div>

                {/* Game Board */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {board.map((square, index) => (
                        <button
                            key={index}
                            onClick={() => handleSquareClick(index)}
                            className={`h-16 md:h-24 text-4xl font-bold rounded-lg transition-all duration-200 ${
                                square === 'X'
                                    ? 'bg-blue-500 text-white'
                                    : square === 'O'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                            } ${!square && !gameOver ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            disabled={!!square || gameOver}
                        >
                            {square}
                        </button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={resetGame}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                    >
                        New Game
                    </button>
                    <button
                        onClick={resetAll}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                    >
                        Reset All
                    </button>
                </div>
            </div>
        </div>
    );
}
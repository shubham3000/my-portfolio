import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// --- Types
type Player = "X" | "O";

// --- Helpers
const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

function calculateWinner(board: (Player | null)[]) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line: [a, b, c] as number[] };
    }
  }
  if (board.every(Boolean)) return { winner: null as Player | null, line: [] };
  return null;
}

function availableMoves(board: (Player | null)[]) {
  const moves: number[] = [];
  board.forEach((v, i) => v === null && moves.push(i));
  return moves;
}

function clone(board: (Player | null)[]) {
  return [...board] as (Player | null)[];
}

// Minimax with small optimizations (unbeatable bot)
function minimax(
  board: (Player | null)[],
  current: Player,
  ai: Player,
  human: Player,
  depth = 0,
  alpha = -Infinity,
  beta = Infinity
): { score: number; move: number | null } {
  const result = calculateWinner(board);
  if (result) {
    // Score from AI perspective
    if (result.winner === ai) return { score: 10 - depth, move: null };
    if (result.winner === human) return { score: depth - 10, move: null };
    return { score: 0, move: null }; // draw
  }

  const moves = availableMoves(board);
  let best: { score: number; move: number | null } = {
    score: current === ai ? -Infinity : Infinity,
    move: null,
  };

  for (const m of moves) {
    const next = clone(board);
    next[m] = current;
    const nextPlayer: Player = current === "X" ? "O" : "X";
    const res = minimax(next, nextPlayer, ai, human, depth + 1, alpha, beta);

    if (current === ai) {
      // maximize
      if (res.score > best.score) best = { score: res.score, move: m };
      if (res.score > alpha) alpha = res.score;
    } else {
      // minimize
      if (res.score < best.score) best = { score: res.score, move: m };
      if (res.score < beta) beta = res.score;
    }

    // Alpha-beta cutoff
    if (beta <= alpha) break;
  }

  return best;
}

// --- Main Component
export default function TicTacToe() {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [human, setHuman] = useState<Player>("X");
  const ai: Player = human === "X" ? "O" : "X";
  const [turn, setTurn] = useState<Player>("X");
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [botThinking, setBotThinking] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highlight, setHighlight] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState<"unbeatable" | "smart" | "easy">(
    "unbeatable"
  );

  const result = useMemo(() => calculateWinner(board), [board]);

  useEffect(() => {
    if (!result) return; // Game continues

    if (result.winner === "X") setScores((s) => ({ ...s, X: s.X + 1 }));
    else if (result.winner === "O") setScores((s) => ({ ...s, O: s.O + 1 }));
    else setScores((s) => ({ ...s, draws: s.draws + 1 })); // Draw

    setGameOver(true);
    setHighlight(result.line);

    // Automatically reset the turn to the human player after a draw
    if (result.winner === null) {
      setTurn(human);
    }
  }, [result, human]);

  // Bot move
  useEffect(() => {
    if (gameOver) return;
    if (turn !== ai) return;

    setBotThinking(true);
    const timer = setTimeout(() => {
      const move = chooseBotMove(board, ai, human, difficulty);
      if (move !== null) {
        const next = clone(board);
        next[move] = ai;
        setBoard(next);
        setTurn(human);
      }
      setBotThinking(false);
    }, 450); // small delay for UX

    return () => clearTimeout(timer);
  }, [turn, ai, human, board, gameOver, difficulty]);

  function chooseBotMove(
    board: (Player | null)[],
    ai: Player,
    human: Player,
    difficulty: "unbeatable" | "smart" | "easy"
  ): number | null {
    const moves = availableMoves(board);
    if (moves.length === 0) return null;

    if (difficulty === "easy") {
      // random
      return moves[Math.floor(Math.random() * moves.length)];
    }

    if (difficulty === "smart") {
      // try win, else block, else center, corner, side
      // win
      for (const m of moves) {
        const tryB = clone(board);
        tryB[m] = ai;
        if (calculateWinner(tryB)?.winner === ai) return m;
      }
      // block
      for (const m of moves) {
        const tryB = clone(board);
        tryB[m] = human;
        if (calculateWinner(tryB)?.winner === human) return m;
      }
      // center
      if (moves.includes(4)) return 4;
      // corners
      const corners = [0, 2, 6, 8].filter((c) => moves.includes(c));
      if (corners.length)
        return corners[Math.floor(Math.random() * corners.length)];
      // sides
      const sides = [1, 3, 5, 7].filter((s) => moves.includes(s));
      return sides.length
        ? sides[Math.floor(Math.random() * sides.length)]
        : moves[0];
    }

    // unbeatable (minimax)
    return minimax(board, ai, ai, human).move as number;
  }

  function handleCellClick(i: number) {
    if (gameOver || botThinking) return; // Prevent moves if the game is over or the bot is thinking
    if (turn !== human) return; // Prevent moves if it's not the human's turn
    if (board[i]) return; // Prevent moves on already occupied cells

    const next = clone(board);
    next[i] = human;
    setBoard(next);
    setTurn(ai); // Switch turn to the bot
  }

  function resetBoard(keepTurn = false) {
    setBoard(Array(9).fill(null)); // Reset the board
    setGameOver(false); // Reset the game over state
    setHighlight([]); // Clear the highlight
    setTurn(human); // Always set the turn to the human player
  }

  function swapSides() {
    setHuman((h) => (h === "X" ? "O" : "X"));
    resetBoard(true);
  }

  const statusText = useMemo(() => {
    if (gameOver) {
      if (result?.winner) return `${result.winner} wins!`;
      return "It's a draw!"; // Draw case
    }
    return turn === human
      ? "Your turn"
      : botThinking
        ? "Bot thinking…"
        : "Bot's turn";
  }, [gameOver, result, turn, human, botThinking]);

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold"
          >
            Tic Tac Toe
          </motion.h2>
          <div className="flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-lg text-white"
            >
              User vs Bot
            </motion.p>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="border-white/30 bg-white/5 backdrop-blur-md rounded-xl px-3 py-2 text-sm text-white"
              >
                <option value="unbeatable" className="text-gray-400">
                  Unbeatable
                </option>
                <option value="smart" className="text-gray-400">
                  Smart
                </option>
                <option value="easy" className="text-gray-400">
                  Easy
                </option>
              </select>
              <button
                onClick={swapSides}
                className="rounded-xl px-3 py-2 border-white/30 bg-white/5 backdrop-blur-md text-sm text-white"
                title="Play as X or O"
              >
                Play as {human}
              </button>
              <button
                onClick={() => resetBoard()}
                className="rounded-xl px-3 py-2 bg-purple-600 hover:bg-purple-500 text-sm"
              >
                Reset
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scores */}
        <motion.div
          className="grid grid-cols-3 gap-2 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="border-white/30 bg-white/5 backdrop-blur-md rounded-xl p-3">
            <div className="text-xs text-white">X</div>
            <div className="text-xl font-semibold text-white">{scores.X}</div>
          </div>
          <div className="border-white/30 bg-white/5 backdrop-blur-md rounded-xl p-3">
            <div className="text-xs text-white">Draws</div>
            <div className="text-xl font-semibold text-white">
              {scores.draws}
            </div>
          </div>
          <div className="border-white/30 bg-white/5 backdrop-blur-md rounded-xl p-3">
            <div className="text-xs text-white">O</div>
            <div className="text-xl font-semibold text-white">{scores.O}</div>
          </div>
        </motion.div>

        {/* Board */}
        <div className="flex justify-center w-full h-[50vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="grid grid-cols-3 gap-2 select-none aspect-square"
          >
            {board.map((cell, i) => {
              const isWinning = highlight.includes(i);
              return (
                <motion.button
                  key={i}
                  onClick={() => handleCellClick(i)}
                  whileTap={{ scale: 0.95 }}
                  className={
                    "aspect-square border-white/30 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-white text-3xl md:text-5xl" +
                    (isWinning ? " ring-2 ring-purple-500" : "")
                  }
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: cell ? 1 : 0.6, opacity: cell ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {cell}
                  </motion.span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Status */}
        <motion.div
          className="mt-4 flex items-center justify-between"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-sm lg:text-lg text-neutral-300">
            {statusText}
          </div>
          {gameOver && (
            <button
              onClick={() => resetBoard(true)}
              className="text-sm underline decoration-dotted"
            >
              Play again (same starter)
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

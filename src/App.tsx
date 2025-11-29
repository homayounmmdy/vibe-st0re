import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calculator from "./(features)/calculator/page.tsx";
import CharacterCounter from "./(features)/character-counter/page.tsx";
import Counter from "./(features)/counter/page.tsx";
import CyberNinja from "./(features)/cyber-ninja/page.tsx";
import FlagPage from "./(features)/flag/page";
import FlappyBird from "./(features)/flappy-bird/page.tsx";
import GermanNoun from "./(features)/german-noun/page";
import HomePage from "./(features)/home/page";
import StackVisualizer from "./(features)/stack-visualizer/page.tsx";
import StarDate from "./(features)/star-date/page";
import Tetris from "./(features)/tetris/page.tsx";
import TicTacToe from "./(features)/tic-tac-toe/page.tsx";

// Optional: If you want to use loaders (data loading)
// import { loader as flagLoader } from "./(features)/flag/loader";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/flag" element={<FlagPage />} />
          <Route path="/games/star-date" element={<StarDate />} />
          <Route path="/games/flappy-bird" element={<FlappyBird />} />
          <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/games/tetris" element={<Tetris />} />
          <Route path="/games/cyber-ninja" element={<CyberNinja />} />
          <Route path="/tools/german-noun" element={<GermanNoun />} />
          <Route path="/tools/calculator" element={<Calculator />} />
          <Route
            path="/tools/character-counter"
            element={<CharacterCounter />}
          />
          <Route path="/tools/stack-visualizer" element={<StackVisualizer />} />
          <Route path="/tools/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

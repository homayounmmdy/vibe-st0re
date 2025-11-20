import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./(features)/home/page";
import FlagPage from "./(features)/flag/page";
import StarDate from "./(features)/star-date/page";
import GermanNoun from "./(features)/german-noun/page";
import FlappyBird from "./(features)/flappy-bird/page.tsx";
import TicTacToe from "./(features)/tic-tac-toe/page.tsx";
import {countriesData} from "./(features)/flag/data/countriesData.ts";

// Optional: If you want to use loaders (data loading)
// import { loader as flagLoader } from "./(features)/flag/loader";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/games/flag" 
            element={<FlagPage />}
          />
          <Route 
            path="/games/star-date" 
            element={<StarDate />}
          />
          <Route
              path="/games/flappy-bird"
              element={<FlappyBird />}
          /><Route
              path="/games/tic-tac-toe"
              element={<TicTacToe />}
          />
          <Route
            path="/tools/german-noun"
            element={<GermanNoun />}
          />
        </Routes>
      </div>
    </Router>
  );
}
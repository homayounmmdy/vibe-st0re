import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./(features)/home/page";
import FlagPage from "./(features)/flag/page";
import StarDate from "./(features)/star-date/page";
import GermanNoun from "./(features)/german-noun/page";
import FlappyBird from "./(features)/flappy-bird/page.tsx";

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
            // loader={flagLoader} // Optional: for data loading
          />
          <Route 
            path="/games/star-date" 
            element={<StarDate />}
            // loader={flagLoader} // Optional: for data loading
          />
          <Route
              path="/games/flappy-bird"
              element={<FlappyBird />}
              // loader={flagLoader} // Optional: for data loading
          />
          <Route 
            path="/tools/german-noun" 
            element={<GermanNoun />}
            // loader={flagLoader} // Optional: for data loading
          />
        </Routes>
      </div>
    </Router>
  );
}
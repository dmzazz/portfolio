import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Undangan from "./pages/Undangan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/undangan" element={<Undangan />} />
      </Routes>
    </Router>
  );
}

export default App;

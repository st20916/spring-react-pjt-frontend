import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './router/about/About';

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/about" element={<About />} />
          </Routes>
      </Router>
  );
}

export default App;

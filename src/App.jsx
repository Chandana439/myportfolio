import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";

import "./Styles/App.css";
import "./Styles/Navbar.css";
import "./Styles/Skills.css";
import "./Styles/About.css";
import "./Styles/Portfolio.css";
import "./Styles/Contact.css";
import "./Styles/Footer.css";
import "./Styles/MediaQ.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

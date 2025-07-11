import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup2 from "./Signup2";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2>Welcome! Please select Sign Up or Login.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

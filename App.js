import React from 'react';
import Authentication from './Authentication';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
        <div>
     <Router>
      <Routes>

      <Route path="/" element={<Authentication /> }/>
        <Route path="/Home" element={<Home/>} />
      </Routes>
     </Router>
      </div>  
   )}

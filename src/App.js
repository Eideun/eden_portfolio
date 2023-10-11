import React, { useState, useRef } from 'react';
import './App.css';
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe"
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [clicked, setClicked] = useState({
    scale: 4,
    backGround: "#fff",
    filter: "none"
  });
  
  const handleMouseMove = (e) => {
    setCursorPosition({
      left: e.clientX,
      top: e.clientY
    });
  };

  const handleDown = () => {
    setClicked((prev) => ({
      ...prev,
      scale: 2,
      backGround: "#EF9F5B",
      filter: "blur(2px)"
    }));
  };

  const handleUp = () => {
    setClicked((prev) => ({
      ...prev,
      scale: 4,
      backGround: "#fff",
      filter: "none"
    }));
  };


  return (
      <div className="App" onMouseMove={handleMouseMove} onMouseDown={handleDown} onMouseUp={handleUp}>
          <Nav />
          <Home />
        <Cursor cursorPosition={cursorPosition} clicked={clicked} />
      </div>

  );
}

export default App;

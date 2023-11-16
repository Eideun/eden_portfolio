import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Home from './pages/Home';
import Cursor from './components/Cursor';
import AboutMe from './pages/AboutMe';
import Stacks from './pages/Stacks';
import Project from "./pages/Project"


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
           <Helmet>
              <title>Eden_portfolio</title>
           </Helmet>
            <Header />
            <Home />
            <AboutMe />
            <Stacks />
            <Project />
            <Cursor cursorPosition={cursorPosition} clicked={clicked} />
      </div>

  );
}

export default App;

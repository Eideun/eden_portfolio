import React, { useState } from 'react';
import { NavStyles } from "../styles/Nav.styles";

const Nav = ({ onClick }) => {

    const [audioState, setAudioState] = useState({
        slideOn: true,
        clicked: true,
        hover: true,
        menuVisible: false
      });
      
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    if (!menuVisible) {
      const audio = new Audio('./slideOn.mp3');
      audio.play();
      audio.currentTime = 0;
      setAudioState(prevState => ({
        ...prevState,
        slideOn: false
      }));
  
      setTimeout(() => {
        setAudioState(prevState => ({
          ...prevState,
          slideOn: true
        }));
      }, 1500);
    }
    setMenuVisible(prev => !prev)
  };

  const handleClicked = () => {
    if (audioState.clicked) {
      const audio = new Audio("./clicked.mp3");
      audio.play();
      audio.currentTime = 0;
      setAudioState(prevState => ({
        ...prevState,
        clicked: false
      }));
  
      setTimeout(() => {
        setAudioState(prevState => ({
          ...prevState,
          clicked: true
        }));
      }, 300);
    }
  };

  const handleHover = () => {
    if (audioState.clicked) {
      const audio = new Audio("./slide.mp3");
      audio.play();
      audio.currentTime = 0;
      setAudioState(prevState => ({
        ...prevState,
        hover: false
      }));
  
      setTimeout(() => {
        setAudioState(prevState => ({
          ...prevState,
          hover: true
        }));
      }, 200);
    }
  };
  
  return (
    <NavStyles.Nav>
      <img id="menu" src="./menu.png" alt="메뉴" onClick={handleMenuClick}/>
      <NavStyles.MenuWrapper style={{ visibility:menuVisible ? 'visible' : 'hidden' }}>
        <NavStyles.Menu1 onClick={handleClicked} onMouseEnter={handleHover}>
          <img src="./aboutme.ico" alt="Home"/>
          <span>Home</span>
        </NavStyles.Menu1>
        <NavStyles.Menu1 onClick={handleClicked} onMouseEnter={handleHover}>
          <img src="./aboutme.ico" alt="About Me"/>
          <span>About Me</span>
        </NavStyles.Menu1>
        <NavStyles.Menu1 onClick={handleClicked} onMouseEnter={handleHover}>
          <img src="./skills.ico" alt="Stacks"/>
          <span>Stacks</span>
        </NavStyles.Menu1>
        <NavStyles.Menu1 onClick={handleClicked} onMouseEnter={handleHover}>
          <img src="./works.ico" alt="Works"/>
          <span>Works</span>
        </NavStyles.Menu1>
        <NavStyles.Menu1 onClick={handleClicked} onMouseEnter={handleHover}>
          <img src="./contact.ico" alt="Contact"/>
          <span>Contact</span>
        </NavStyles.Menu1>
      </NavStyles.MenuWrapper>
    </NavStyles.Nav>
  );
};

export default Nav;
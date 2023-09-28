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
  const [activeMenus, setActiveMenus] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false
  });

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
    setMenuVisible(prev => !prev);
  };

  const handleClicked = (menu) => {
    if (audioState.clicked) {
      const audio = new Audio('./clicked.mp3');
      audio.play();
      audio.currentTime = 0;
      setAudioState((prevState) => ({
        ...prevState,
        clicked: false
      }));
  
      setTimeout(() => {
        setAudioState((prevState) => ({
          ...prevState,
          clicked: true
        }));
      }, 300);
      
      if(menuVisible) {
      setActiveMenus((prev) => ({
        ...Object.fromEntries(Object.keys(prev).map((key) => [key, key === menu])),
      }));
    }
    }
  };

  const handleHover = () => {
    if (audioState.clicked) {
      const audio = new Audio('./slide.mp3');
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
      <NavStyles.MenuWrapper style={{ visibility: menuVisible ? 'visible' : 'hidden' }}>
        <NavStyles.Menu1
          style={{
            transform: activeMenus.menu1 ? 'translate3d(10px, 0, 0)' : '',
            background: activeMenus.menu1 ? '#F5C500' : ''
          }} onClick={() => handleClicked('menu1')} onMouseEnter={handleHover}>
          <img src="./aboutme.ico" alt="Home"/>
          <span>Home</span>
        </NavStyles.Menu1>
        <NavStyles.Menu2 
           style={{
            transform: activeMenus.menu2 ? 'translate3d(10px, 0, 0)' : '',
            background: activeMenus.menu2 ? '#F5C500' : ''
          }} 
          onClick={() => handleClicked('menu2')} 
          onMouseEnter={handleHover}>
          <img src="./aboutme.ico" alt="About Me"/>
          <span>About Me</span>
        </NavStyles.Menu2>
        <NavStyles.Menu3
          style={{
            transform: activeMenus.menu3 ? 'translate3d(10px, 0, 0)' : '',
            background: activeMenus.menu3 ? '#F5C500' : ''
          }}
          onClick={() => handleClicked('menu3')}
          onMouseEnter={handleHover}
        >
          <img src="./skills.ico" alt="Stacks"/>
          <span>Stacks</span>
        </NavStyles.Menu3>
        <NavStyles.Menu4
          style={{
            transform: activeMenus.menu4 ? 'translate3d(10px, 0, 0)' : '',
            background: activeMenus.menu4 ? '#F5C500' : ''
          }}
          onClick={() => handleClicked('menu4')}
          onMouseEnter={handleHover}
        >
          <img src="./works.ico" alt="Works"/>
          <span>Works</span>
        </NavStyles.Menu4>
        <NavStyles.Menu5
          style={{
            transform: activeMenus.menu5 ? 'translate3d(10px, 0, 0)' : '',
            background: activeMenus.menu5 ? '#F5C500' : ''
          }}
          onClick={() => handleClicked('menu5')}
          onMouseEnter={handleHover}
        >
          <img src="./contact.ico" alt="Contact"/>
          <span>Contact</span>
        </NavStyles.Menu5>
      </NavStyles.MenuWrapper>
    </NavStyles.Nav>
  );
};

export default Nav;

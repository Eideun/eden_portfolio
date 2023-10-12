import React, { useState } from 'react';
import { NavStyles } from "../styles/Nav.styles";
import { Link } from 'react-scroll';

const Nav = () => {
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

    if(!menuVisible) {
      setActiveMenus((prev) => ({
        ...prev,
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
      }))
    }
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
    }
    setActiveMenus((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, key === menu])),
    }));
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
    <NavStyles.Navi>
      <img id="menu" src="./menu.png" alt="메뉴" onClick={handleMenuClick}/>
      <NavStyles.MenuWrapper>
        <Link to="home" smooth={true} duration={200}>
          <NavStyles.Menu1
            onClick={() => handleClicked('menu1')}
            onMouseEnter={handleHover}
            menuVisible={menuVisible}
            activeMenus={activeMenus}
          >
            <img src="./aboutme.ico" alt="Home"/>
            <span>Home</span>
          </NavStyles.Menu1>
        </Link>
        <Link to="aboutMe" smooth={true} duration={200}>
          <NavStyles.Menu2
            onClick={() => handleClicked('menu2')}
            onMouseEnter={handleHover}
            menuVisible={menuVisible}
            activeMenus={activeMenus}
          >
            <img src="./aboutme.ico" alt="About Me"/>
            <span>About Me</span>
          </NavStyles.Menu2>
        </Link>
        <NavStyles.Menu3
          onClick={() => handleClicked('menu3')}
          onMouseEnter={handleHover}
          menuVisible={menuVisible}
          activeMenus={activeMenus}
        >
          <img src="./skills.ico" alt="Stacks"/>
          <span>Stacks</span>
        </NavStyles.Menu3>
        <NavStyles.Menu4
          onClick={() => handleClicked('menu4')}
          onMouseEnter={handleHover}
          menuVisible={menuVisible}
          activeMenus={activeMenus}
        >
          <img src="./works.ico" alt="Works"/>
          <span>Works</span>
        </NavStyles.Menu4>
        <NavStyles.Menu5
          onClick={() => handleClicked('menu5')}
          onMouseEnter={handleHover}
          menuVisible={menuVisible}
          activeMenus={activeMenus}
        >
          <img src="./contact.ico" alt="Contact"/>
          <span>Contact</span>
        </NavStyles.Menu5>
      </NavStyles.MenuWrapper>
    </NavStyles.Navi>
  );
};

export default Nav;
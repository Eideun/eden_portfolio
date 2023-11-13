import React, { useState } from "react"
import { NavStyles } from "../styles/Nav.styles"
import { Link } from "react-scroll"

const Nav = () => {
    const [audioState, setAudioState] = useState({
        slideOn: true,
        clicked: true,
        hover: true,
        menuVisible: false
      });
    
      const [menuVisible, setMenuVisible] = useState(false);
      const [activemenus, setActivemenus] = useState({
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
          setActivemenus((prev) => ({
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
        setActivemenus((prev) => ({
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
        <div>
            <NavStyles.Container>
                <NavStyles.LogoWrapper>
                    <img src="./menu.png" alt="menu" onClick={handleMenuClick}/>
                  <Link to="home" smooth={true} duration={200}>  
                    <h2>Eden's Portfolio</h2>
                  </Link>
                </NavStyles.LogoWrapper>
                <NavStyles.MenuWrapper>
                  <Link to="home" smooth={true} duration={200}>
                     <NavStyles.Menu1 onClick={() => handleClicked('menu1')} onMouseEnter={handleHover} menuVisible={menuVisible} activemenus={activemenus}>
                     <img src="./myhome.png" alt="home"/>Home</NavStyles.Menu1>
                  </Link>
                  <Link to="about-me" smooth={true} duration={200}>       
                        <NavStyles.Menu2 onClick={() => handleClicked('menu2')} onMouseEnter={handleHover} menuVisible={menuVisible} activemenus={activemenus}>
                            <img src="./aboutme.ico" alt="aboutme"/>About Me</NavStyles.Menu2 >
                  </Link>    
                  <Link to="stacks" smooth={true} duration={200}>
                        <NavStyles.Menu3 onClick={() => handleClicked('menu3')} onMouseEnter={handleHover} menuVisible={menuVisible} activemenus={activemenus}>
                            <img src="./stacks.ico" alt="stacks"/>Stacks</NavStyles.Menu3>
                  </Link>
                  <Link to="project" smooth={true} duration={200}>
                        <NavStyles.Menu4 onClick={() => handleClicked('menu4')} onMouseEnter={handleHover} menuVisible={menuVisible} activemenus={activemenus}>
                            <img src="./works.ico" alt="works"/>Project</NavStyles.Menu4>
                  </Link>
                        <NavStyles.Menu5 onClick={() => handleClicked('menu5')} onMouseEnter={handleHover} menuVisible={menuVisible} activemenus={activemenus}>
                            <img src="./contact.ico" alt="contact"/>Contact</NavStyles.Menu5>
                </NavStyles.MenuWrapper>
            </NavStyles.Container>
        </div>       
    )
}

export default Nav
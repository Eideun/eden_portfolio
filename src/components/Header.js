import React, { useState } from "react"
import { HeaderStyles } from "../styles/Header.styles"
import { Link } from "react-scroll"

const Header = () => {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (index) => {
        if (index === selectedMenu) {
          setSelectedMenu(selectedMenu);
        } else {
 
          setSelectedMenu(index);
        }
      };

    return (
        <div>
            <HeaderStyles.Container>
                <HeaderStyles.LogoWrapper>
                <Link to="home" smooth={true} duration={200}>
                     <h2>Eden's Portfolio</h2>
                </Link>
                </HeaderStyles.LogoWrapper>
                <HeaderStyles.MenuWrapper>
                <Link to="home" smooth={true} duration={200}>
                    <span className={selectedMenu === 0 ? 'selected' : ''}
                     onClick={() => handleMenuClick(0)}>Home</span>
                </Link>
                <Link to="about-me" smooth={true} duration={200}>
                    <span   className={selectedMenu === 1 ? 'selected' : ''}
                     onClick={() => handleMenuClick(1)}>About Me</span>
                </Link>
                <Link to="stacks" smooth={true} duration={200}>
                    <span   className={selectedMenu === 2 ? 'selected' : ''}
        onClick={() => handleMenuClick(2)}>Stacks</span>
                </Link>
        <Link to="project" smooth={true} duration={200}>
                    <span   className={selectedMenu === 3 ? 'selected' : ''}
        onClick={() => handleMenuClick(3)}>Project</span>
        </Link>
        <Link to="Contact" smooth={true} duration={200}>
                    <span   className={selectedMenu === 4 ? 'selected' : ''}
        onClick={() => handleMenuClick(4)}>Contact</span>
        </Link>
                </HeaderStyles.MenuWrapper>
            </HeaderStyles.Container>
        </div>
    )
}

export default Header
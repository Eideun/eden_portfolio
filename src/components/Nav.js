import { NavStyles } from "../styles/Nav.styles"

const Nav = ({onClick}) => {
    return (
        <NavStyles.Nav onClick={onClick}>
            <img id="menu" src="./menu.png" alt="메뉴"/> 
            <NavStyles.MenuWrapper>
            <NavStyles.Menu1>
                    <img src="./aboutme.ico" />
                    <span>Home</span>
                </NavStyles.Menu1>
                <NavStyles.Menu1>
                    <img src="./aboutme.ico" />
                    <span>About Me</span>
                </NavStyles.Menu1>
                <NavStyles.Menu1>
                    <img src="./skills.ico" />
                    <span>Stacks</span>
                </NavStyles.Menu1>
                <NavStyles.Menu1>
                    <img src="./works.ico" />
                    <span>Works</span>
                </NavStyles.Menu1>
                <NavStyles.Menu1>
                    <img src="./contact.ico" />
                    <span>Contact</span>
                </NavStyles.Menu1>
            </NavStyles.MenuWrapper>
        </NavStyles.Nav>
    )
}

export default Nav

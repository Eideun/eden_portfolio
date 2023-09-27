import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    color: white;

    #menu {
        width: 60px;
        user-select: none;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const Menu1 = styled.div`
    display: flex;
    background: #E3EAF4;
    width: 160px;
    align-items: center;
    color: #838486;
    font-size: 24px;
    font-weight: 500;
    margin-top: 6px;
    margin-left: 20px;
    border: 2px solid gray;
    padding-top: 3px;
    padding-bottom: 3px;
    display: none;

    img {
        margin-left: 15px;
        margin-right: 10px;
        width: 40px;
       
    }
`

export const NavStyles = {
    Nav,
    MenuWrapper,
    Menu1
}
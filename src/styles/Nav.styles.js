import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-left: 60px;
    padding-top: 60px;
    color: white;

    #menu {
        width: 60px;
        user-select: none;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.3)
        }
    
        &:active {
            animation-duration: 1s;
            animation-timing-function: cubic-bezier(0.2, 0.86, 0.35, 1);
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-direction: normal;
            animation-fill-mode: forwards;
            animation-play-state: running;
            animation-name: rotate-back-out;
        }
    }
    
    @keyframes rotate-back-out {
        0% {
            transform: rotate(0) scale(0.8);

        }
        45% {
            transform: rotate(185deg) scale(0.7);
        }
        100% {
            transform: rotate(180deg) scale(0.6);
        }
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    visibility: hidden;
    pointer-events: visiblePainted;
`;

const Menu = styled.div`
  background: #E3EAF4;
  width: 180px;
  height: 60px;
  align-items: center;
  color: #838486;
  font-size: 28px;
  margin-top: 6px;
  margin-left: 20px;
  border: 2px solid gray;
  padding-top: 3px;
  padding-bottom: 3px;
  transition: transform 0.3s;
  display: flex;

  img {
    margin-left: 15px;
    margin-right: 10px;
    width: 40px;
  }

  &:hover {
    background: #F5C500;
    color: white;
    transform: scale(1.2);
  }

  &:active {
    transform: translate3d(15px, 0, 0)

  }
`;



export const NavStyles = {
  Nav,
  MenuWrapper,
  Menu1: Menu,
  Menu2: Menu,
  Menu3: Menu,
  Menu4: Menu,
  Menu5: Menu
};

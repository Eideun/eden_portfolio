import styled, { keyframes } from "styled-components";

const rotateBackOut = keyframes`
  0% {
    transform: rotate(0) scale(0.8);
  }
  45% {
    transform: rotate(185deg) scale(0.7);
  }
  100% {
    transform: rotate(180deg) scale(0.6);
  }
`;

const Navi = styled.nav`
  display: flex;
  position: fixed;
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
      transform: scale(1.3);
    }

    &:active {
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.2, 0.86, 0.35, 1);
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-name: ${rotateBackOut};
    }
  }

  h1 {
    margin-bottom: 30px;
  }
`;

const MenuBase = styled.div`
  display: flex;
  position: relative;
  background: #e3eaf4;
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
  user-select: none;

  img {
    margin-left: 15px;
    margin-right: 10px;
    width: 40px;
  }

  &:hover {
    background: ${(props) => (props.active ? "#F6A201" : "yellow")};
    color: whitesmoke;
    transform: ${(props) => (props.active ? "scale(1)" : "scale(1.15)")};
    transition: transform 0.2s ease;
  }

  &:active {
    transform: scale(0.8);
    transition: transform 0.2s ease-in-out;
    background: #f6a201;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const NavStyles = {
  Navi,
  MenuWrapper,
  Menu1: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-500px")};
    left: ${(props) => (props.activeMenus.menu1 ? "15px" : "0")};
    background: ${(props) => (props.activeMenus.menu1 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.75s ease-in-out"
        : "top 0.15s ease-in-out"}, left 0.2s ease-in-out;
  `,
  Menu2: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-500px")};
    left: ${(props) => (props.activeMenus.menu2 ? "15px" : "0")};
    background: ${(props) => (props.activeMenus.menu2 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.6s ease-in-out"
        : "top 0.3s ease-in-out"}, left 0.2s ease-in-out;
  `,
  Menu3: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-500px")};
    left: ${(props) => (props.activeMenus.menu3 ? "15px" : "0")};
    background: ${(props) => (props.activeMenus.menu3 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.45s ease-in-out"
        : "top 0.45s ease-in-out"}, left 0.2s ease-in-out;
  `,
  Menu4: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-500px")};
    left: ${(props) => (props.activeMenus.menu4 ? "15px" : "0")};
    background: ${(props) => (props.activeMenus.menu4 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.3s ease-in-out"
        : "top 0.6s ease-in-out"}, left 0.2s ease-in-out;
  `,
  Menu5: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-500px")};
    left: ${(props) => (props.activeMenus.menu5 ? "15px" : "0")};
    background: ${(props) => (props.activeMenus.menu5 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.15s ease-in-out"
        : "top 0.75s ease-in-out"}, left 0.2s ease-in-out;
  `,
};

import styled from "styled-components"

const Container = styled.div`
    height: 100%;
    position: fixed;
    user-select: none;
    left: 50px;
    top: 30px;
`

const LogoWrapper = styled.div`
    display: flex;
    height: 10%;
    align-items: center;
    margin: 0 auto;

    img {
        width: 50px;
        height: 50px;
        border: 2px solid #969A9B;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.3);
        }
    
        &:active {
          animation: rotate 1s;
        }

        &:hover {
            background: white;
            cursor: pointer;
        }
    }

    h2 {
        color: #969A9B;
        font-size: 30px;
        margin-top: 4px;
        margin-left: 20px;
        font-family: fontBold;
        font-weight: 600;

        &:hover {
            color: white;
        }
    }

    @keyframes rotate {
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
`

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`

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

  &:active {
    transform: scale(0.85);
    transition: transform 0.2s ease;
  }
}
`

export const NavStyles = {
    Container,
    LogoWrapper,
    MenuWrapper,
    Menu1: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-600px")};
    left: ${(props) => (props.activemenus.menu1 ? "15px" : "0")};
    background: ${(props) => (props.activemenus.menu1 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.75s ease-in-out"
        : "top 0.15s ease-in-out"}, left 0.2s ease-in-out;
  `,
  
  Menu2: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-600px")};
    left: ${(props) => (props.activemenus.menu2 ? "15px" : "0")};
    background: ${(props) => (props.activemenus.menu2 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.6s ease-in-out"
        : "top 0.3s ease-in-out"}, left 0.2s ease-in-out;
  `,

  Menu3: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-600px")};
    left: ${(props) => (props.activemenus.menu3 ? "15px" : "0")};
    background: ${(props) => (props.activemenus.menu3 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.45s ease-in-out"
        : "top 0.45s ease-in-out"}, left 0.2s ease-in-out;
  `,

  Menu4: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-600px")};
    left: ${(props) => (props.activemenus.menu4 ? "15px" : "0")};
    background: ${(props) => (props.activemenus.menu4 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.3s ease-in-out"
        : "top 0.6s ease-in-out"}, left 0.2s ease-in-out;
  `,

  Menu5: styled(MenuBase)`
    top: ${(props) => (props.menuVisible ? "0" : "-600px")};
    left: ${(props) => (props.activemenus.menu5 ? "15px" : "0")};
    background: ${(props) => (props.activemenus.menu5 ? "#F6A201" : "#E3EAF4")};
    transition: ${(props) =>
      props.menuVisible
        ? "top 0.15s ease-in-out"
        : "top 0.75s ease-in-out"}, left 0.2s ease-in-out;
    `
}
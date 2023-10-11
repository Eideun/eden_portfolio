import styled from "styled-components"


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
`;

   const Menu = styled.div`
    display: flex;
    position: relative;
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
    user-select: none;
    

    img {
        margin-left: 15px;
        margin-right: 10px;
        width: 40px;
    }

    &:active {
        transform: scale(0.9);
        transition: transform 0.1s ease;
        background: #F6A201;
    }
`;


export const NavStyles = {
  Navi,
  MenuWrapper,
  Menu1: styled(Menu)`
    top: ${(props) => (props.menuVisible ? '0' : '-500px')};
    left: ${(props) => (props.activeMenus.menu1 ? '15px' : '0')};
    background: ${(props) => (props.activeMenus.menu1 ? '#F6A201' :'#E3EAF4')};
    transition: ${(props) => (props.menuVisible? "top 0.75s ease-in-out" : "top 0.15s ease-in-out")},
    left 0.2s ease-in-out;

    &:hover {
      background: ${(props) => (props.activeMenus.menu1 ? '#F6A201' :'yellow')};
      color: whitesmoke;
      transform: ${(props) => (props.activeMenus.menu1 ? 'scale(1)' :'scale(1.15)')}
      transition: transform 0.2s ease;
  }
  `,
  Menu2: styled(Menu)`
    top: ${(props) => (props.menuVisible ? '0' : '-500px')};
    left: ${(props) => (props.activeMenus.menu2 ? '15px' : '0')};
    background: ${(props) => (props.activeMenus.menu2 ? '#F6A201' :'#E3EAF4')};
    transition: ${(props) => (props.menuVisible? "top 0.6s ease-in-out" : "top 0.3s ease-in-out")},
    left 0.2s ease-in-out;

    &:hover {
      background: ${(props) => (props.activeMenus.menu2 ? '#F6A201' :'yellow')};
      color: whitesmoke;
      transform: ${(props) => (props.activeMenus.menu2 ? 'scale(1)' :'scale(1.15)')};
      transition: transform 0.2s ease;
  }
  `,
  Menu3: styled(Menu)`
    top: ${(props) => (props.menuVisible ? '0' : '-500px')};
    left: ${(props) => (props.activeMenus.menu3 ? '15px' : '0')};
    background: ${(props) => (props.activeMenus.menu3 ? '#F6A201' :'#E3EAF4')};
    transition: ${(props) => (props.menuVisible? "top 0.45s ease-in-out" : "top 0.45s ease-in-out")},
    left 0.2s ease-in-out;

    &:hover {
      background: ${(props) => (props.activeMenus.menu3 ? '#F6A201' :'yellow')};
      color: whitesmoke;
      transform: ${(props) => (props.activeMenus.menu3 ? 'scale(1)' :'scale(1.15)')};
      transition: transform 0.2s ease;
  }

  `,
  Menu4: styled(Menu)`
    top: ${(props) => (props.menuVisible ? '0' : '-500px')};
    left: ${(props) => (props.activeMenus.menu4 ? '15px' : '0')};
    background: ${(props) => (props.activeMenus.menu4 ? '#F6A201' :'#E3EAF4')};
    transition: ${(props) => (props.menuVisible? "top 0.3s ease-in-out" : "top 0.6s ease-in-out")},
    left 0.2s ease-in-out;

    &:hover {
      background: ${(props) => (props.activeMenus.menu4 ? '#F6A201' :'yellow')};
      color: whitesmoke;
      transform: ${(props) => (props.activeMenus.menu4 ? 'scale(1)' :'scale(1.15)')};
      transition: transform 0.2s ease;
  }
  `,
  Menu5: styled(Menu)`
    top: ${(props) => (props.menuVisible ? '0' : '-500px')};
    left: ${(props) => (props.activeMenus.menu5 ? '15px' : '0')};
    background: ${(props) => (props.activeMenus.menu5 ? '#F6A201' :'#E3EAF4')};
    transition: ${(props) => (props.menuVisible? "top 0.15s ease-in-out" : "top 0.75s ease-in-out")},
    left 0.2s ease-in-out;

    &:hover {
      background: ${(props) => (props.activeMenus.menu5 ? '#F6A201' :'yellow')};
      color: whitesmoke;
      transform: ${(props) => (props.activeMenus.menu5 ? 'scale(1)' :'scale(1.15)')};
      transition: transform 0.2s ease;
  }
  `
};
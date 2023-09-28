import styled from "styled-components";

const Cursor = styled.div`
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.clicked.backGround};
    transition: transform 0.4s;
    mix-blend-mode: difference;
    cursor: none;
    pointer-events: none;
    transform: ${(props) => `scale(${props.clicked.scale})`};
    left: ${(props) => `${props.cursorPosition.left - 10}px`};
    top: ${(props) => `${props.cursorPosition.top - 10}px`};
    z-index: 9999;
`;
;

export { Cursor };
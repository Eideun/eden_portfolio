import styled from "styled-components"

const Cursor = styled.div`
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.4s;
    mix-blend-mode: difference;
    cursor: pointer;
`;

export const CursorStyles = {
    Cursor
}

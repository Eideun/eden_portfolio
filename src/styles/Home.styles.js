import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("./bg.gif");
    background-size: 100%;
`;

const Title = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    color: white;

    h1 {
        margin-top: 30vh;
        position: relative;
        font-size: 40px;
        overflow: hidden;
        white-space: nowrap;
        animation: typing 2000s steps(15000, end);
        font-size: 50px;

        &::after {
            content: '|';
            position: absolute;
            top: -0.3rem;
            animation: blink 1s infinite;
        }
    }

    @keyframes typing {
        from { width : 0 }
        to { width: 20000% }
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
`;

const Nav = styled.nav`
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    color: white;
    display: flex;
    justify-content: flex-end;

    ul {
        display: flex;
    }
            
    li {
        list-style: none;
        font-size: 25px;
        margin-right: 30px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Wrapper = styled.div`
    border: 2px solid white;
    border-radius: 10px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Button = styled.button`
    border: 1px solid gray;
    border-radius: 8px;
    width: 120px;
    height: 40px;
    font-weight: 900;
    font-size: 20px;
`

export const HomeStyles = {
    Container,
    Title,
    Nav,
    Wrapper,
    Button,
    ButtonWrapper
}
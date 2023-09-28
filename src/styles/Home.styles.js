import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("./bg.gif");
  background-size: 100%;
`;

const Title = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  color: white;

  h1 {
    position: relative;
    font-size: 40px;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1000s steps(18000, end);
    font-size: 50px;
    pointer-events: none;
    user-select: none;

    &::after {
      content: '|';
      position: absolute;
      top: -0.2rem;
      animation: blink 1.2s infinite;
    }
  }

  @keyframes typing {
    from { width: 0% }
    to { width: 10000% }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 30px;
      transition: transform 0.4s ease;
    }
    
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  font-weight: 900;
  font-size: 20px;
`;

export const HomeStyles = {
  Container,
  Title,
  Button,
  ButtonWrapper
};

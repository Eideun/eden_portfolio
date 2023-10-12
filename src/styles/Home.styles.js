import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #141414;

  .message {
    top: 93vh;
    left: 49vw;
    position: absolute;
    color: white;
    font-size: 20px;
    letter-spacing: 1.2px;
    opacity: 0.8;
    user-select: none;
    margin-left: 15px;
  }

`;

const Title = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  color: white;
  
  h1 {
    margin-top: 40vh;
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
      margin-top: 50px;
      transition: transform 0.4s ease;
    }
    
    justify-content: center;
  }
`;

const Scroll = styled.div`
position: absolute;
width: 35px;
height: 35px;
top: 90vh;
left: 50vw;
background-image: url("./scroll.png");
background-size: 35px 35px;
filter: invert(100%);
animation: scrolldown 1300ms linear infinite;

  @keyframes scrolldown {
    0% {
      top: 86vh;
      opacity: 0;
  }
  50% {
      top: 88vh;
      opacity: 0.5;
  }
  100% {
      top: 90vh;
      opacity: 0;
  }
  }
`

export const HomeStyles = {
  Container,
  Title,
  Scroll1:styled(Scroll)`
  animation: scrolldown 1300ms 650ms linear infinite;
    animation-fill-mode: backwards;
  `,
  Scroll2:styled(Scroll)`
  animation: scrolldown 1300ms linear infinite;
  `
};

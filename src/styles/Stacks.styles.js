import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--bg-color);
  transition: background-color 6s ease;
  padding-bottom: 100px;

  @media(max-width: 767px) {
    width: 90vw;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto 0;
  height: 60px;
  align-items: center;
  width: 100%;
  min-width: 100%;
  z-index: 9998;
  -webkit-font-smoothing: antialiased;

  h2 {
    font-size: 2.7rem;
    font-weight: 900;
    color: rgb(156, 107, 212);
    letter-spacing: 5px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 50px;

  h3 {
    color: white;
    position: relative;
    padding: 6px 25px;
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    border: 1px solid rgb(50, 50, 60);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    transform: scale(1.3);
    transition: 700ms ease;
    letter-spacing: 2px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  margin: 0 auto;

  @media(max-width: 767px) {
    width: 80%;
  }
`;

const Bar = styled.div`
  display: flex;
  margin-top: 15px;
  height: 25px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const BarTag = styled.div`
  width: 150px;
  background: #04c2c9;
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.04rem;
  color: white;
  font-family: NotoM;
`;

const BarFlex = styled.div`
  width: 80%;
  background: #eee;
  animation: fill 3s linear;

  @keyframes fill {
    from { width: 0% }
    to { width: 80% }
  }
`;

const Percentage = styled.div`
  color: gray;
  background: #eee;
  padding-right: 10px;
`;

const BarFill = styled.div`
  height: 100%;
  background: #00a1a7;
`;

export const StacksStyles = {
    Container,
    Title,
    Section,
    Wrapper,
    Bar,
    BarTag,
    BarFlex,
    Percentage,
    BarFill,
}
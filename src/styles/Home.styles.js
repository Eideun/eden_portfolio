import styled from "styled-components"

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  background: #141414;
`;

const NavWrapper = styled.div`
  min-width: 250px;
  min-height: 100%;
  display: flex;

  @media(max-width: 767px) {
      display: none;
  }
`

const TitleWrapper = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
height: 60px;
align-items: center;
margin-top: 46vh;
padding-right: 5%;

h1 {
  font-size: 48px
}

@media (max-width: 767px)  {
  padding-right: 0px;

  h1 {
    font-size: 22px;
  }

}

@media (min-width: 768px) and (max-width: 991px)  {
  padding-right: 0px;
  h1 {
    font-size: 36px;
  }
}

.animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

const BallWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -100vh;

  @media(max-width: 767px) {
    display: none;
  }
`

const Ball1 = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: #fff;
  animation: ball1-1 3s linear infinite alternate;
  opacity: 0.2;

  @keyframes ball1-1 {
  0% {
      transform: translate3d(120%, 180%,0)
  }
  50% {
    transform: translate3d(130%, 170%,0);
  }
  100% {
    transform: translate3d(140%, 160%,0);
  }
  }
`

const Ball2 = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: #fff;
  animation: ball1-2 3s linear infinite alternate;
  opacity: 0.4;

  @keyframes ball1-2 {
  0% {
      transform: translate3d(100%, 140%,0)
  }
  50% {
    transform: translate3d(90%, 130%,0);
  }
  100% {
    transform: translate3d(80%, 120%,0);
  }
  }
`




export const HomeStyles = {
  Container,
  TitleWrapper,
  NavWrapper,
  BallWrapper,
  Ball1,
  Ball2
}
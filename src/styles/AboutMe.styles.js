import styled, { keyframes } from "styled-components"


const Container = styled.div`  
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-x: hidden;
`


const bounceAnimation = keyframes`
  0%, 100% {
    top: 0;
  }
  50% {
    top: -25px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 60px;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  min-width: 100%;
  z-index: 9998;
  -webkit-font-smoothing: antialiased;

  h2 {
    color: black;
    font-size: 2.7rem;
    position: relative;
    top: 20px;
    display: inline-block;
    font-family: fontBold;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 transparent,
                 0 7px 0 transparent,
                 0 8px 0 transparent,
                 0 9px 0 transparent,
                 0 10px 10px rgba(0, .2, 0, .8);

    animation: ${bounceAnimation} 0.7s ease-in-out infinite alternate;

    &:hover {
        letter-spacing: 10px;
        transition: letter-spacing 0.5s ease;
    }
  }
`;

const UnderLine = styled.div`
    min-width: 200px;
    height: 1px;
    border: 1px solid black;
    margin-bottom: 30px;
    z-index: 9999;
`

const ContentsWrapper = styled.div`
    width: 900px;
    height: 450px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.25);
    margin: 50px auto;
    padding: 20px 0;
    z-index: -9999;
    position: relative;

    @media(max-width: 767px) {
        width: 80vw;
        flex-direction: column;
        margin-bottom: 0;
        height: 100%;
        margin: 0 10vw 10vh;
    }
`

const Introduce = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    white-space: nowrap;

    .profile {
        width: 200px;
        margin-top: 20px;
        margin-bottom: 30px;

        @media(max-width: 767px) {
            width: 100%;
            margin-top: 0;
        }
    }

    @media(max-width: 767px) {
        width: 80%;
        margin-bottom: 50px;
        align-items: center;
        margin-left: 10%;
       

        .row {
            display: flex;
            justify-content: center;
        }

    }

    @keyframes int {
        0% {
            opacity: 0.2;
        }
        25% {
            opacity: 0.5;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
        }
    }
`

const Mention = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    letter-spacing: 1px;
    margin-top: 30px;
    font-weight: 500;
    line-height: 2rem;

    @media(max-width: 767px) {
        width: 100%;
        white-space: normal;
        margin: 0 auto;
        text-align: left;

        span {
            font-size: 14px;
        }
    }
`

const Profile = styled.div`
    display: flex;
    width: 400px;

    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px 70px 10px; 


        li {
            list-style:none;
            line-height: 3;
            font-family: NotoM;
        }

        img {
            width: 1.5rem;
            margin-right: 30px;
        }

        .git {
            font-weight: 600;
        }

        @media(max-width: 767px) {
            width: 100%;   
            

            li {
                font-size: 14px;
                line-height: 2.5;
                padding:0;
            }
        }
`

export const AboutMeStyles = {
    Container,
    TitleWrapper,
    UnderLine,
    ContentsWrapper,
    Introduce,
    Profile,
    Mention
}
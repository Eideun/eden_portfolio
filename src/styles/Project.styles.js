import styled from "styled-components"
import Card from 'react-bootstrap/Card';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
flex-direction: column;
overflow: hidden;
background: #1d809f;
padding-bottom: 100px;

@media(max-width: 767px) {
  width: 100%;
}
`

const Title = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 100px auto 0;
height: 60px;
align-items: center;
width: 100%;
min-width: 100%;
-webkit-font-smoothing: antialiased;


h2 {
  color: white;
  font-size: 2.7rem;
  font-weight: 900;
  letter-spacing: 5px;
}
`

const CardBody = styled(Card)`
    width: 1000px;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 20px 0;    

    @media(max-width: 767px) {
        width: 90%;
        height: 100%;
    }
`

const SubTitle = styled.div`
    margin: 30px auto;

    h3 {
        font-family: NotoM;
        font-size: 36px;
        font-weight: 700;
    }
`

const ProjectInfo = styled.div`
    display: flex;
    padding-left: 50px;
    width: 100%;
    height: 100%;
    padding: 0 50px;

    @media(max-width: 767px) {
        flex-direction: column;
    }
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
        height: 90%; 
    }

    .carousel .dot {
        width: 15px;
        height: 15px;
        background-color: gray;
    }

    .carousel .dot.selected {
        background-color: black;
    }

    control-arrow.control-next {
        background:blue;
        padding: 10px;
    }

    .carousel-status {
        font-size: 16px;
        color: black;
    }

    @media(max-width: 767px) {
        width: 100%;
    }
`

const Description = styled.div`
    width: 60%;
    height: 100%;
    padding: 40px 40px 0 0;
    margin-left: 40px;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        margin-left: 14px;
    }

    @media(max-width: 767px) {
        width: 80vw;
        margin: 0 auto;

        p {
            font-size: 12px;
        }
    }
`

const UnderLine = styled.div`
padding-bottom: 1rem;
margin-bottom: 1rem;
border-bottom: 1px solid #ccc;
font-weight: 400;
font-size: 1rem;
`

const Detail = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-family: NotoM;

    span {
        font-size: 14px;
    }

    list {
        font-size: 18px;
    }

    .list {
        font-size: 18px;
    }

    a {
        font-size: 8px;
        font-family: san-serif;
        text-align: left;
        color: blue;
        text-decoration: underline;
    }

    .stacks {
        font-size: 16px;
    }

    @media(max-width: 767px) {
        width: 100vw;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;

        .margin {
            margin-top: 10px;
        }

        span {
            font-size: 14px;
        }
    }
`

const Detail2 = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    font-family: NotoM;

    span {
        font-size: 18px;
    }

    .stacks {
        display: flex;
        justify-content: flex-start;
    }

    @media(max-width: 767px) {
        width: 100vw;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;

        .margin {
            margin-top: 10px;
        }

        img {
            margin-top: 0;
        }

        li {
            font-size: 14px;
        }
    }
`

export const ProjectStyles = {
    Container,
    Title,
    CardBody,
    SubTitle,
    ProjectInfo,
    Intro,
    Description,
    UnderLine,
    Detail,
    Detail2
}
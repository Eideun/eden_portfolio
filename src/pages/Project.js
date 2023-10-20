import styled from "styled-components"
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
flex-direction: column;
overflow0x: hidden;
background: #1d809f;
padding-bottom: 100px;

@media(max-width: 767px) {
  width: 100vw;
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
z-index: 9998;
-webkit-font-smoothing: antialiased;

h2 {
  color: white;
  font-size: 2.7rem;
  font-weight: 900;
  letter-spacing: 5px;
}
`

const CardBody = styled(Card)`
    width: 900px;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 20px 0;    
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
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
        max-height: 90%; 
    }

    .carousel .dot {
        width: 20px;
        height: 20px;
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


`

const Description = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
`

const Project = () => {
    return (
        <div>
            <Container>
                <Title>
                    <h2>Project</h2>
                </Title>
                <CardBody>
                    <SubTitle><h3>WonderLand</h3></SubTitle>
                    <ProjectInfo>                    
                        <Intro>
                            <Carousel showThumbs={false} showStatus={true} statusFormatter={(current, total) => `${current} / ${total}`}>
                                <img src="./wonderland.jpg" alt="Wonderland" />
                                <img src="./cart.jpg" alt="cart" />
                                <img src="./payment.jpg" alt="payment" />
                                <img src="./mypage.jpg" alt="my-page" />
                            </Carousel>
                        </Intro>
                        <Description>
                            <p>어쩌구 저쩌구</p>
                        </Description>
                    </ProjectInfo>
                </CardBody>
            </Container>
        </div>
    )
}

export default Project
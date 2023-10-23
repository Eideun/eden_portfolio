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
    width: 1000px;
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

`

const Detail2 = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    font-family: NotoM;

    span {
        font-size: 18px;
    }

    img {
        margin-top: 5px;
    }
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
                            <p>아동용 도서 판매를 하는 온라인 쇼핑몰입니다.</p>
                            <p>처음 진행해보는 팀 프로젝트로 팀원들과의 협업 과정, 기획 등 많은 것을 배울수 있었습니다.</p>
                            <p>팀원들과 역할 분담을 하여<br></br> 마이페이지, 장바구니, 결제화면 페이지를 담당하였으며
                                담당한 페이지의 UX /UI구성, 와이어 프레이밍까지 직접 디자인 하였습니다.</p>

                            <UnderLine />
                            <Detail>
                                <img src="./check.png" alt="check"/>
                                <span className="list">GitHub</span>
                                <a href="https://github.com/Eideun/Wonderland"><span>https://github.com/Eideun/Wonderland</span></a>
                            </Detail>
                            <Detail>
                                <img src="./check.png" alt="check"/>
                                <span className="list">URL</span>
                                <a href="https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/"><span>https://64b149b4216c5613554b1f18.app</span></a>
                            </Detail>
                            <Detail>
                                <img src="./check.png" alt="check"/>
                                <span className="list">기술스택</span>
                                <span className="stacks">HTML5, CSS3, JavaScript, Bulma</span>
                            </Detail>
                            <Detail2>
                                <img src="./check.png" alt="check"/>
                                <span className="list">담당 업무</span>
                                <ul>
                                    <li>HTML 마크업</li>
                                    <li>CSS 스타일링</li>
                                    <li>DOM 조작, 이벤트 핸들링, API통신 등</li>
                                </ul>
                            </Detail2>
                        </Description>
                    </ProjectInfo>
                </CardBody>
              
            </Container>
        </div>
    )
}

export default Project
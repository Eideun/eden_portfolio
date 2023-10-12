import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { AboutMeStyles } from "../styles/AboutMe.styles"

const AboutMe = () => {
    return (
        <AboutMeStyles.Body id="aboutMe">
           <AboutMeStyles.MainContainer>
                <h1>About Me</h1>
                <AboutMeStyles.UnderLine />
                <p>사용자 중심의 멋진 사용자 경험을 만들어내는 프론트엔드 개발자입니다.</p>
                <p>다양한 스택을 접하며 아름답고 흥미로운 UX를 제공할수있는 개발자가 되고 싶습니다.</p>
                <AboutMeStyles.Profile>
                    <Container className="container">

                        <Row>
                            <Col xs={6} md={4}>
                                <Image className="profile"src="./myprofile.jpg" roundedCircle />

                            </Col>
                        </Row>
                    </Container>
                    <ul>
                        <li><img src="./name.png" /><span>유이든</span></li>
                        <li><img src="./birth.png" /><span>93.06.22</span></li>
                        <li><img src="./myhome.png" /><span>서울 동작구</span></li>
                        <li><img src="./email.png" /><span>wop33@naver.com</span></li>
                        <li><img src="./edu.png" /><span>광주보건대학교(중퇴)</span></li>
                        <li className="git"><img src="./git.png" /><a href="https://github.com/Eideun?tab=repositories"><span>Github</span></a></li>
                    </ul>
                </AboutMeStyles.Profile>
           </AboutMeStyles.MainContainer>
        </AboutMeStyles.Body>
    )
}

export default AboutMe
import { AboutMeStyles } from "../styles/AboutMe.styles"
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <div id="about-me">
            <AboutMeStyles.Container>
                <AboutMeStyles.TitleWrapper>
                    <h2>
                        <span>A</span>
                        <span>b</span>
                        <span>o</span>
                        <span>u</span>
                        <span>t</span>
                        <span> </span>
                        <span>M</span>
                        <span>e</span>
                    </h2>
                    <AboutMeStyles.UnderLine />
                </AboutMeStyles.TitleWrapper>
                <AboutMeStyles.ContentsWrapper>
                    <AboutMeStyles.Introduce>
                        <Row className="row">
                           <Col xs={6} md={4}>
                              <Image className="profile"src={process.env.PUBLIC_URL + "/myprofile.jpg"} roundedCircle alt="profile"/>
                           </Col>
                        </Row>
                        <AboutMeStyles.Mention>
                            <span>새로운 시도를 두려워하지 않는 주니어 개발자입니다.</span>
                            <span>남들보다 늦게 시작한 만큼 멈추지 않고</span>
                            <span>끊임없이 발전해 나가는 모습 보여드리겠습니다!</span>
                        </AboutMeStyles.Mention>
                    </AboutMeStyles.Introduce>
                    <AboutMeStyles.Profile>
                        <ul>
                            <li><img src={process.env.PUBLIC_URL + "/name.png"} alt="name"/><span>유이든</span></li>
                            <li><img src={process.env.PUBLIC_URL + "/birth.png"} alt="birth"/><span>93.06.22</span></li>
                            <li><img src={process.env.PUBLIC_URL + "/address.png"} alt="address"/><span>서울 동작구</span></li>
                            <li><img src={process.env.PUBLIC_URL + "/email.png"} alt="email"/><span>wop33@naver.com</span></li>
                            <li><img src={process.env.PUBLIC_URL + "/edu.png"} alt="edu"/><span>광주보건대학교(중퇴)</span></li>
                        </ul>
                    </AboutMeStyles.Profile>
                </AboutMeStyles.ContentsWrapper>
            </AboutMeStyles.Container>
        </div>
    )
}

export default AboutMe
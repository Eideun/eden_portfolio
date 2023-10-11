import styled from "styled-components"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Body = styled.div`
    height: 50vh;
    width: 100vw;
`

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    user-select: none;

    h1 {
        margin-top: 100px;
        font-size: 50px;
    }

    .container {
        width: 50%;
    }
`

const UnderLine = styled.div`
    width: 10vw;
    height: 1px;
    border: 1px solid black;
`

const Profile = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.25);
    margin-top: 30px;
    margin-bottom: 30vh;
    
    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px 50px; 

        li {
            list-style:none;
            margin-top: 15px;
            font-family: san-serif;
        }

        img {
            width: 2rem;
            margin-right: 30px;
        }
    }

    .profile {
        width: 300px;
        margin: 50px 20px;
    }
`;



const AboutMe = () => {
    return (
        <Body>
           <MainContainer>
                <h1>About Me</h1>
                <UnderLine />
                <Profile>
                    
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
                    </ul>
                </Profile>
           </MainContainer>
        </Body>
    )
}

export default AboutMe
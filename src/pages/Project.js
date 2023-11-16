import React from 'react';
import styled from "styled-components"
import Carousel1 from "../components/Carousel1"
import Carousel2 from "../components/Carousel2"
import Carousel3 from "../components/Carousel3"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow0x: hidden;
  background-color: #1D809F;
  padding-bottom: 100px;
  overflow-x: hidden;

  @media(max-width: 767px) {
    width: 95vw;
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
    font-size: 2.7rem;
    font-weight: 900;
    color: whitesmoke;
    letter-spacing: 5px;
  }
`

const ContentsWrapper = styled.div`
    width: 1200px;
    height: 900px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.25);
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px 0;

    @media(max-width: 767px) {
      height: 1400px;
      width: 80vw;
      margin-top: 80px;
      margin-right: 7vw;
    }
`

const ProjectTitle = styled.div`
  display: flex;
  margin: 30px auto;
  
  h3 {
    font-size: 40px;
    font-family: NotoM;
    letter-spacing: 0;
  }
`

const ProjectContainer = styled.div`
  display: flex;

  @media(max-width:767px) {
    flex-direction: column;
  }
`

const Section1 = styled.div`
  padding: 50px;
  width: 600px;
  margin-left: 50px;

  @media(max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`

const Section2 = styled.div`
  padding: 50px 0 0 20px;
  width: 500px;

  @media(max-width: 767px) {
    width: 100%;
    margin-top: 150px;
  }
`

const Introduce = styled.div`
  p {
    font-size: 16px;
  }

  @media(max-width:767px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    
    p {
      font-size: 14px;
    }
  }
`

const UnderLine = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgb(204, 204, 204);
`

const Description = styled.div`
  display: flex;

`

const CheckBoxes = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;

  img {
    width: 20px;
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Processer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 20px;
    margin-top: 31px;
  }

  @media(max-width: 767px) {
    width: 100px;

    span {
      font-size: 18px;
      margin-top: 34px;
    }
  }
`

const Detail = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  a {
    margin-top: 34px;
    color: blue;
    opacity: 0.8;
  }

  span {
    margin-top: 17px;
    font-size: 16px;
  }

  ul {
    margin-top: 30px;
    margin-left: 0;
    padding-left: 14px;
  }

  .stacks {
    margin-top: 38px;
  }

  .space {
    margin-top: 34px;
  }

  .stacks2 {
    margin-top: 15px;
  }

  .works {
    margin-top: 16px;
    font-size: 16px;
  }
`

const Project = () => {
  return (
    <div id="project">
        <Container>
          <Title>
            <h2>Project</h2>
          </Title>
          <ContentsWrapper>
            <ProjectTitle>
              <h3>Wonderland</h3>
            </ProjectTitle>
            <ProjectContainer>
              <Section1>
                <Carousel1 />
              </Section1>
              <Section2>
                <Introduce>
                  <p>아동용 도서 판매를 위주로 하는 온라인 쇼핑몰입니다.</p>
                  <p>처음 진행해보는 팀 프로젝트로 바닐라 자바스크립트로 개발하였으며<br />
                     팀원들과의 협업, 기획 등 새로운 경험을 할 수 있었습니다.</p>
                  <p>팀원들과 역할 분담을 하여<br />
                     마이페이지, 장바구니, 결제화면 페이지를 담당하였으며<br />
                     페이지의 UX/UI구성, 와이어 프레이밍까지 직접 디자인 하였습니다.
                  </p>
                </Introduce>
              <UnderLine />
                <Description>
                  <CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </CheckBoxes> 
                  <Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </Processer> 
                  <Detail>
                    <a href="https://github.com/Eideun/Wonderland"><span>https://github.com/Eideun/Wonderland</span></a>
                    <a href="https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/"><span>https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/</span></a>
                    <span>마이페이지, 장바구니, 결제화면</span>
                    <span className="stacks">HTML5, CSS3, JavaScript, Bulma</span>
                    <ul>
                      <li>HTML 마크업 개발 및 구현</li>
                      <li>CSS 스타일링</li>
                      <li>동적 사용자 상호 작용을 위해 DOM 조작 및 이벤트 처리 적용</li>
                    </ul>
                  </Detail> 
                </Description>
              </Section2>
            </ProjectContainer>
          </ContentsWrapper>

          <ContentsWrapper>
            <ProjectTitle>
              <h3>오늘도 코딩</h3>
            </ProjectTitle>
            <ProjectContainer>
              <Section1>
                <Carousel2 />
              </Section1>
              <Section2>
                <Introduce>
                  <p>개발자들의 Todo관리 및 일지 작성을 할 수 있는 사이트를 컨셉으로 개발하였습니다.</p>
                  <p>처음 리액트로 웹사이트를 개발해 보았으며<br />
                     리액트 hook의 사용법이나 상태관리 등 많이 사용해보지 않아 생소했던 부분을 사용해보면서 더욱 개념을 깊게 다질 수 있었습니다 .</p>
                  <p>또한 로그인이나 회원가입 등 회원정보 관리에 대해 전담하게 되어 <br />
                     백엔드와의 API 통신 및 회원 정보 관리 로직에 대해 학습할 수 있었습니다.
                  </p>
                </Introduce>
              <UnderLine />
                <Description>
                  <CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </CheckBoxes> 
                  <Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </Processer> 
                  <Detail>
                    <a href="https://github.com/Eideun/always-coding"><span>https://github.com/Eideun/always-coding</span></a>
                    <a href="https://eideun.github.io/always-coding/"><span>https://eideun.github.io/always-coding/</span></a>
                    <span className="space">홈, 회원가입, 로그인, 비밀번호 변경, 회원탈퇴, 프로필 수정</span>
                    <span className="stacks2">react, react-router-dom,<br />styled-components, bootstrap</span>
                    <ul className="works">
                      <li>UI/UX 디자인 구현 (Figma)</li>
                      <li>회원정보 관리 관련 로직 구현<br />(로그인 및 로그아웃, 회원가입시 유효성 검사, 회원탈퇴, 회원정보 수정 등)</li>
                      <li>호스팅 및 배포(Github)</li>
                    </ul>
                  </Detail> 
                </Description>
              </Section2>
            </ProjectContainer>
          </ContentsWrapper>



          <ContentsWrapper>
            <ProjectTitle>
              <h3>Eden's Portfolio</h3>
            </ProjectTitle>
            <ProjectContainer>
              <Section1>
                <Carousel3 />
              </Section1>
              <Section2>
                <Introduce>
                  <p>포트폴리오 용도로 제작한 웹사이트로 지금 보고계시는 웹사이트입니다.</p>
                  <p>반응형 웹사이트로 개발하였으며<br />
                     개발 초기에는 기획에 중요성을 간과해 무턱대고 만들었다가 여러번 수정을 거쳐
                     지금의 사이트가 되었습니다.</p>
                  <p>Web Audio API를 이용하여 메뉴 click 및 hover 사운드를 추가함으로써 <br />
                     조금이나마 차별화된 경험을 제공하고자 하였습니다.</p>
                  <p>또 Github를 이용하여 첫 웹사이트 배포 경험을 할 수 있엇습니다.</p>
                </Introduce>
              <UnderLine />
                <Description>
                  <CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </CheckBoxes> 
                  <Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </Processer> 
                  <Detail>
                    <a href="https://github.com/Eideun/always-coding"><span>https://github.com/Eideun/always-coding</span></a>
                    <a href="https://eideun.github.io/always-coding/"><span>https://eideun.github.io/always-coding/</span></a>
                    <span className="space">홈, 회원가입, 로그인, 비밀번호 변경, 회원탈퇴, 프로필 수정</span>
                    <span className="stacks2">react, Web Audio API,<br />styled-components, bootstrap</span>
                    <ul className="works">
                      <li>UI/UX 디자인 구현 (Figma)</li>
                      <li>컴포넌트 개발</li>
                      <li>호스팅 및 배포(Github)</li>
                    </ul>
                  </Detail> 
                </Description>
              </Section2>
            </ProjectContainer>
          </ContentsWrapper>
        </Container>
    </div>
  )
}



export default Project;

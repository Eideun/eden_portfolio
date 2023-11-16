import React from 'react';
import { ProjectStyles } from '../styles/Project.styles';
import Carousel1 from "../components/Carousel1"
import Carousel2 from "../components/Carousel2"
import Carousel3 from "../components/Carousel3"



const Project = () => {
  return (
    <div id="project">
        <ProjectStyles.Container>
          <ProjectStyles.Title>
            <h2>Project</h2>
          </ProjectStyles.Title>
          <ProjectStyles.ContentsWrapper>
            <ProjectStyles.ProjectTitle>
              <h3>Wonderland</h3>
            </ProjectStyles.ProjectTitle>
            <ProjectStyles.ProjectContainer>
              <ProjectStyles.Section1>
                <Carousel1 />
              </ProjectStyles.Section1>
              <ProjectStyles.Section2>
                <ProjectStyles.Introduce>
                  <p>아동용 도서 판매를 위주로 하는 온라인 쇼핑몰입니다.</p>
                  <p>처음 진행해보는 팀 프로젝트로 바닐라 자바스크립트로 개발하였으며<br />
                     팀원들과의 협업, 기획 등 새로운 경험을 할 수 있었습니다.</p>
                  <p>팀원들과 역할 분담을 하여<br />
                     마이페이지, 장바구니, 결제화면 페이지를 담당하였으며<br />
                     페이지의 UX/UI구성, 와이어 프레이밍까지 직접 디자인 하였습니다.
                  </p>
                </ProjectStyles.Introduce>
              <ProjectStyles.UnderLine />
                <ProjectStyles.Description>
                  <ProjectStyles.CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </ProjectStyles.CheckBoxes> 
                  <ProjectStyles.Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </ProjectStyles.Processer> 
                  <ProjectStyles.Detail>
                    <a href="https://github.com/Eideun/Wonderland"><span>https://github.com/Eideun/Wonderland</span></a>
                    <a href="https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/"><span>https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/</span></a>
                    <span>마이페이지, 장바구니, 결제화면</span>
                    <span className="stacks">HTML5, CSS3, JavaScript, Bulma</span>
                    <ul>
                      <li>HTML 마크업 개발 및 구현</li>
                      <li>CSS 스타일링</li>
                      <li>동적 사용자 상호 작용을 위해 DOM 조작 및 이벤트 처리 적용</li>
                    </ul>
                  </ProjectStyles.Detail> 
                </ProjectStyles.Description>
              </ProjectStyles.Section2>
            </ProjectStyles.ProjectContainer>
          </ProjectStyles.ContentsWrapper>

          <ProjectStyles.ContentsWrapper>
            <ProjectStyles.ProjectTitle>
              <h3>오늘도 코딩</h3>
            </ProjectStyles.ProjectTitle>
            <ProjectStyles.ProjectContainer>
              <ProjectStyles.Section1>
                <Carousel2 />
              </ProjectStyles.Section1>
              <ProjectStyles.Section2>
                <ProjectStyles.Introduce>
                  <p>개발자들의 Todo관리 및 일지 작성을 할 수 있는 사이트를 컨셉으로 개발하였습니다.</p>
                  <p>처음 리액트로 웹사이트를 개발해 보았으며<br />
                     리액트 hook의 사용법이나 상태관리 등 많이 사용해보지 않아 생소했던 부분을 사용해보면서 더욱 개념을 깊게 다질 수 있었습니다 .</p>
                  <p>또한 로그인이나 회원가입 등 회원정보 관리에 대해 전담하게 되어 <br />
                     백엔드와의 API 통신 및 회원 정보 관리 로직에 대해 학습할 수 있었습니다.
                  </p>
                </ProjectStyles.Introduce>
              <ProjectStyles.UnderLine />
                <ProjectStyles.Description>
                  <ProjectStyles.CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </ProjectStyles.CheckBoxes> 
                  <ProjectStyles.Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </ProjectStyles.Processer> 
                  <ProjectStyles.Detail>
                    <a href="https://github.com/Eideun/always-coding"><span>https://github.com/Eideun/always-coding</span></a>
                    <a href="https://eideun.github.io/always-coding/"><span>https://eideun.github.io/always-coding/</span></a>
                    <span className="space">홈, 회원가입, 로그인, 비밀번호 변경, 회원탈퇴, 프로필 수정</span>
                    <span className="stacks2">react, react-router-dom,<br />styled-components, bootstrap</span>
                    <ul className="works">
                      <li>UI/UX 디자인 구현 (Figma)</li>
                      <li>회원정보 관리 관련 로직 구현<br />(로그인 및 로그아웃, 회원가입시 유효성 검사, 회원탈퇴, 회원정보 수정 등)</li>
                      <li>호스팅 및 배포(Github)</li>
                    </ul>
                  </ProjectStyles.Detail> 
                </ProjectStyles.Description>
              </ProjectStyles.Section2>
            </ProjectStyles.ProjectContainer>
          </ProjectStyles.ContentsWrapper>
          <ProjectStyles.ContentsWrapper>
            <ProjectStyles.ProjectTitle>
              <h3>Eden's Portfolio</h3>
            </ProjectStyles.ProjectTitle>
            <ProjectStyles.ProjectContainer>
              <ProjectStyles.Section1>
                <Carousel3 />
              </ProjectStyles.Section1>
              <ProjectStyles.Section2>
                <ProjectStyles.Introduce>
                  <p>포트폴리오 용도로 제작한 웹사이트로 지금 보고계시는 웹사이트입니다.</p>
                  <p>반응형 웹사이트로 개발하였으며<br />
                     개발 초기에는 기획에 중요성을 간과해 무턱대고 만들었다가 여러번 수정을 거쳐
                     지금의 사이트가 되었습니다.</p>
                  <p>Web Audio API를 이용하여 메뉴 click 및 hover 사운드를 추가함으로써 <br />
                     조금이나마 차별화된 경험을 제공하고자 하였습니다.</p>
                  <p>또 Github를 이용하여 첫 웹사이트 배포 경험을 할 수 있엇습니다.</p>
                </ProjectStyles.Introduce>
              <ProjectStyles.UnderLine />
                <ProjectStyles.Description>
                  <ProjectStyles.CheckBoxes>
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                    <img src={process.env.PUBLIC_URL + "/check.png"} />
                  </ProjectStyles.CheckBoxes> 
                  <ProjectStyles.Processer>
                    <span>Github</span>
                    <span>URL</span>
                    <span>담당업무</span>
                    <span>기술스택</span>
                    <span>작업내용</span>
                  </ProjectStyles.Processer> 
                  <ProjectStyles.Detail>
                    <a href="https://github.com/Eideun/always-coding"><span>https://github.com/Eideun/always-coding</span></a>
                    <a href="https://eideun.github.io/always-coding/"><span>https://eideun.github.io/always-coding/</span></a>
                    <span className="space">홈, 회원가입, 로그인, 비밀번호 변경, 회원탈퇴, 프로필 수정</span>
                    <span className="stacks2">react, Web Audio API,<br />styled-components, bootstrap</span>
                    <ul className="works">
                      <li>UI/UX 디자인 구현 (Figma)</li>
                      <li>컴포넌트 개발</li>
                      <li>호스팅 및 배포(Github)</li>
                    </ul>
                  </ProjectStyles.Detail> 
                </ProjectStyles.Description>
              </ProjectStyles.Section2>
            </ProjectStyles.ProjectContainer>
          </ProjectStyles.ContentsWrapper>
        </ProjectStyles.Container>
    </div>
  )
}


export default Project;

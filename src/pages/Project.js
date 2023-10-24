import { ProjectStyles } from "../styles/Project.styles"
import { Carousel } from 'react-responsive-carousel';

const Project = () => {
    return (
        <div id="project">
            <ProjectStyles.Container>
                <ProjectStyles.Title>
                    <h2>Project</h2>
                </ProjectStyles.Title>
                <ProjectStyles.CardBody>
                    <ProjectStyles.SubTitle><h3>WonderLand</h3></ProjectStyles.SubTitle>
                    <ProjectStyles.ProjectInfo>                    
                        <ProjectStyles.Intro>
                            <Carousel showThumbs={false} showStatus={true} statusFormatter={(current, total) => `${current} / ${total}`}>
                                <img src="./wonderland.jpg" alt="Wonderland" />
                                <img src="./cart.jpg" alt="cart" />
                                <img src="./payment.jpg" alt="payment" />
                                <img src="./mypage.jpg" alt="my-page" />
                            </Carousel>
                        </ProjectStyles.Intro>
                        <ProjectStyles.Description>
                            <p>아동용 도서 판매를 하는 온라인 쇼핑몰입니다.</p>
                            <p>처음 진행해보는 팀 프로젝트로 팀원들과의 협업 과정, 기획 등 많은 것을 배울수 있었습니다.</p>
                            <p>팀원들과 역할 분담을 하여<br></br> 마이페이지, 장바구니, 결제화면 페이지를 담당하였으며
                                담당한 페이지의 UX /UI구성, 와이어 프레이밍까지 직접 디자인 하였습니다.</p>
                            <ProjectStyles.UnderLine />
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">GitHub</span>
                                </div>
                                <div>
                                    <a href="https://github.com/Eideun/Wonderland"><span>https://github.com/Eideun/Wonderland</span></a>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">URL</span>
                                </div>
                                <div>
                                    <a href="https://64b149b4216c5613554b1f18--lucky-creponne-adbfde.netlify.app/"><span>https://64b149b4216c5613554b1f18.app</span></a>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">기술스택</span>
                                </div>
                                <div>
                                    <span className="stacks">HTML5, CSS3, JavaScript, Bulma</span>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail2>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">담당 업무</span>
                                </div>
                                <div>
                                    <ul>
                                        <li>HTML 마크업</li>
                                        <li>CSS 스타일링</li>
                                        <li>DOM 조작, 이벤트 핸들링, API통신 등</li>
                                    </ul>
                                </div>
                            </ProjectStyles.Detail2>
                        </ProjectStyles.Description>
                    </ProjectStyles.ProjectInfo>
                </ProjectStyles.CardBody>
                <ProjectStyles.CardBody>
                    <ProjectStyles.SubTitle><h3>Eden's Portfolio</h3></ProjectStyles.SubTitle>
                    <ProjectStyles.ProjectInfo>                    
                        <ProjectStyles.Intro>
                            <Carousel showThumbs={false} showStatus={true} statusFormatter={(current, total) => `${current} / ${total}`}>
                                <img src="./portfolio.jpg" alt="Portfolio" />
                                <img src="./portfolio2.jpg" alt="Portfolio" />
                                <img src="./portfolio3.jpg" alt="Portfolio" />
                            </Carousel>
                        </ProjectStyles.Intro>
                        <ProjectStyles.Description>
                            <p>포트폴리오 용도로 제작한 웹사이트로 지금 보고계시는 웹사이트입니다.</p>
                            <p>순수 React로 개발한 반응형 웹사이트입니다. <br></br>
                            개발 과정에서 기초적인 UX/UI 디자인, 다양한 CSS용법에 대해 다시 학습할수 있었고, <br></br>
                            Web Audio API를 이용하여 메뉴 click, hover 사운드를 추가하였습니다.</p>
                            <p>또 github를 이용하여 첫 웹사이트 호스팅 및 배포 경험을 할수 있었습니다.</p>
                            <ProjectStyles.UnderLine />
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">GitHub</span>
                                </div>
                                <div>
                                    <a href="https://github.com/Eideun/eden_portfolio"><span>https://github.com/Eideun/eden_portfolio</span></a>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">URL</span>
                                </div>
                                <div>
                                    <a href="https://eideun.github.io/eden_portfolio/"><span>https://eideun.github.io/eden_portfolio</span></a>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">기술스택</span>
                                </div>
                                <div>
                                    <span className="stacks">React,styled-compontnts,
                                    Web Audio API</span>
                                </div>
                            </ProjectStyles.Detail>
                            <ProjectStyles.Detail2>
                                <div className="margin">
                                    <img src="./check.png" alt="check"/>
                                    <span className="list">담당 업무</span>
                                </div>
                                <div>
                                    <ul>
                                        <li>UI/UX 디자인 구현(Figma)</li>
                                        <li>컴포넌트 개발</li>
                                        <li>호스팅 및 배포(github)</li>
                                    </ul>
                                </div>
                            </ProjectStyles.Detail2>
                        </ProjectStyles.Description>
                    </ProjectStyles.ProjectInfo>
                </ProjectStyles.CardBody>     
            </ProjectStyles.Container>
        </div>
    )
}

export default Project
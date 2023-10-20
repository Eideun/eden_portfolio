import React from 'react';
import { HomeStyles } from '../styles/Home.styles';
import Nav from "../components/Nav"
import UpButton from "../components/UpButton"

const Home = () => {

  return (
    <div id="home">
        <HomeStyles.Container>
          <HomeStyles.NavWrapper>
            <Nav />
          </HomeStyles.NavWrapper>  
            <HomeStyles.TitleWrapper>
              <div class="col-md-12 text-center">
                <h1 class="animate-charcter">FE개발자 유이든의 Portfolio 입니다.</h1>
              </div>
            </HomeStyles.TitleWrapper>
            <UpButton />
            <HomeStyles.BallWrapper>
                <HomeStyles.Ball1 />
                <HomeStyles.Ball2 />
            </HomeStyles.BallWrapper>
        </HomeStyles.Container>
    </div>
  );
};

export default Home;

import React from 'react';
import { HomeStyles } from '../styles/Home.styles';
import UpButton from '../components/UpButton';
import Effect from '../components/Effect';

const Home = () => {

  return (
      <HomeStyles.Container id="home">
        <HomeStyles.Title>
          <h1>FE개발자 유이든의 Portfolio입니다.</h1>
        </HomeStyles.Title> 
        <HomeStyles.Scroll1 />
        <HomeStyles.Scroll2 />
        <span className="message">scroll</span>
        <UpButton />
      </HomeStyles.Container>
  );
};

export default Home;

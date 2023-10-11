import React from 'react';
import { HomeStyles } from '../styles/Home.styles';
import Nav from "../components/Nav";


const Home = () => {

  return (
    <HomeStyles.Container>
      <HomeStyles.Title >
        <h1>FE개발자 유이든의 Portfolio입니다.</h1>
      </HomeStyles.Title>
      <HomeStyles.Scroll1 />
      <HomeStyles.Scroll2 />
      <span className="message">scroll</span>
    </HomeStyles.Container>
  );
};

export default Home;

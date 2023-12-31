import React, { useState, useEffect } from 'react';
import { HomeStyles } from '../styles/Home.styles';
import Cursor from "../components/Cursor"

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
    const [clicked, setClicked] = useState({
        scale: 4,
        backGround: "#fff",
        fiter: "none"
    })

    const handleMouseMove = (e) => {
        setCursorPosition({ 
            left: e.clientX, 
            top: e.clientY 
        });
    };

    const handleDown = () => {
        setClicked((prev) => ({
            ...prev,
            scale: 2,
            backGround: "#EF9F5B",
            filter: "blur(2px)"
        })
    )
    }

    const handleUp = () => {
        setClicked((prev) => ({
            ...prev,
            scale: 4,
            backGround: "#fff",
            filter: "none"
        })
    )
    }
    return (
        <HomeStyles.Container onMouseMove={handleMouseMove}
        onMouseDown={handleDown}
        onMouseUp={handleUp}>
            <HomeStyles.Nav>
                <HomeStyles.Wrapper>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Archives</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </HomeStyles.Wrapper>
            </HomeStyles.Nav>
            <HomeStyles.Title>
                <h1>FE개발자 유이든의 Portfolio입니다.</h1>
            </HomeStyles.Title>
            <Cursor cursorPosition={cursorPosition} 
                    clicked={clicked} />
        </HomeStyles.Container>
    );
};

export default Home;
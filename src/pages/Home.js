import React, { useState, useEffect } from 'react';
import { HomeStyles } from '../styles/Home.styles';
import Cursor from "../components/Cursor";
import { HomeButton } from '../components/HomeButton';
import Nav from "../components/Nav";

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
    const [clicked, setClicked] = useState({
        scale: 4,
        backGround: "#fff",
        fiter: "none"
    })
    const [canPlaySound, setCanPlaySound] = useState(true);

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
        }));
    };

    const handleUp = () => {
        setClicked((prev) => ({
            ...prev,
            scale: 4,
            backGround: "#fff",
            filter: "none"
        })
    )
    }

    const handleClickSound = () => {
        if (canPlaySound) {
            const audio = new Audio('./click.mp3');
            audio.play();
            audio.currentTime = 0;
            setCanPlaySound(false);

            setTimeout(() => {
                setCanPlaySound(true);
            }, 2000);
        }
    }
    


    return (
        <HomeStyles.Container onMouseMove={handleMouseMove} onMouseDown={handleDown} onMouseUp={handleUp}>
            <Cursor cursorPosition={cursorPosition} clicked={clicked} />
            <Nav onClick={handleClickSound} />
            <HomeStyles.Title>
                <h1>FE개발자 유이든의 Portfolio입니다.</h1>
            </HomeStyles.Title>
            <HomeButton />
        </HomeStyles.Container>
    );
};

export default Home;
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Up = styled.div`
    display: ${props => (props.visible ? 'flex' : 'none')}; /* 수정: 스타일 템플릿 리터럴에 대한 오류 수정 */
    flex-direction: row-reverse;  
    padding-right: 80px;
    padding-top: 350px;

    img {
        width: 50px;
        position: fixed;
        cursor: pointer;
    }
`;

const UpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Up visible={isVisible}>
            <img src="./up.png" onClick={scrollUp} alt="Scroll Up" />
        </Up>
    );
};

export default UpButton;

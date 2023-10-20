import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Up = styled.div`
    display: ${props => (props.visible ? 'flex' : 'none')};
    position: fixed;
    left: 92vw;
    top: 85vh;
    z-index: 9999;

    img {
        width: 50px;
        position: fixed;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        top: 87vh;
        left: 87vw;
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

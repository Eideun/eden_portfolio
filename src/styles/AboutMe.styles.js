import styled from "styled-components";

const Body = styled.div`
    height: 45vh;
    width: 100vw;
    
`

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    user-select: none;

    h1 {
        margin-top: 150px;
        font-size: 50px;
    }

    .container {
        width: 50%;
        padding: 0;
        margin: 0;
    }

    p {
        font-size: 18px;
        letter-spacing: -0.5px;
        font-family: NotoM;
    }

`

const UnderLine = styled.div`
    width: 10vw;
    height: 1px;
    border: 1px solid black;
    margin-bottom: 30px;
`

const Profile = styled.div`
    display: flex;
    justify-content: center;
    width: 35vw;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.25);
    margin-top: 30px;
    margin-bottom: 30vh;
    padding: 20px 0;
    
    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px 20px 10px; 

        li {
            list-style:none;
            line-height: 2.5;
            font-family: san-serif;
        }

        img {
            width: 1.5rem;
            margin-right: 30px;
        }

        .git {
            font-weight: 600;
        }
    }

    .profile {
        width: 250px;
        margin: 20px 0;
    }

    &:hover {
        transform: scale(1.15);
        transition: transform 0.6s ease-in-out;
    }
`;

export const AboutMeStyles = {
    Body,
    MainContainer,
    UnderLine,
    Profile
}
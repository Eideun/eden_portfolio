import styled from "styled-components"

const Star = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    z-index: -9000;
    margin: 0 auto;
    top: 0;
    width: 100%;

    img {
        width: 200px;
        animation: star 15s infinite linear;
        overflow: hidden;
    }

    @keyframes star {
        0% {
            opacity: 0.3;
            transform: translate3d(500px,1500px,0) scale(0.4);
        }
        75% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1.7);
        }
    }

    #star1 {
        animation-duration: 8s;
    }
    #star2 {
        animation-duration: 14s;
    }
    #star3 {
        animation-duration: 18s;
    }
    #star4 {
        animation-duration: 20s;
    }
    #star5 {
        animation-duration: 16s;
    }
    #star6 {
        animation-duration: 12s;
    }
`

const Effect = () => {
    return (
        <Star>
            <img id="star1" src="./star.png" />
            <img id="star2" src="./star.png" />
            <img id="star3" src="./star.png" />
            <img id="star4" src="./star.png" />
            <img id="star5" src="./star.png" />
            <img id="star6" src="./star.png" />
        </Star>
    )
}

export default Effect
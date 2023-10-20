import styled from "styled-components"

const Star = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    z-index: 9999 !important;
    margin: 0 auto;
    top: 0;
    width: 100%;
    overflow: hidden;
    

    img {
        width: 200px;
        animation: star 15s infinite linear;
        overflow: hidden;
        z-index: 9999;
    }

    @keyframes star {
        0% {
            opacity: 0.3;
            transform: translate3d(0, 100%, 0) scale(0.4);
        }
        75% {
            opacity: 0.4;
        }
        100% {
            opacity: 0.5;
            transform: translateY(-100%) scale(1.7);
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
        <div>
            <Star>
                <img id="star1" src="./star.png" />
                <img id="star2" src="./star.png" />
                <img id="star3" src="./star.png" />
                <img id="star4" src="./star.png" />
                <img id="star5" src="./star.png" />
                <img id="star6" src="./star.png" />
            </Star>
        </div>
    )
}

export default Effect
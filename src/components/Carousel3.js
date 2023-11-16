import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CustomCarousel = styled(Carousel)`
  height: 500px;
  &&& {
    .carousel-control-next-icon {
      background-image: url(${process.env.PUBLIC_URL}/next.png);
      opacity: 0.7;
    }
    .carousel-control-prev-icon {
      background-image: url(${process.env.PUBLIC_URL}/prev.png);
      opacity: 0.7;
    }
    .carousel-control-prev,
    .carousel-control-next {
      display: flex;
      align-items: center;
      height: 600px;
    }

    @media(max-width:767px) {
      height: 200px;
    }
    .carousel-indicators {
      background: gray;
      opacity: 0.4;
      position: relative;
    }
  }

  @media(max-width: 767px) {
    height: 300px;
  }
`

const ImageBox = styled(Carousel.Item)`
  &&& {
    img {
      width: 500px;
      height: 600px;
    }
    @media(max-width: 767px) {
      display: flex;
      justify-content: center;
      img {
        width:  350px;
        height: 400px;
      }
    }
  }

`

function Carousel3() {
  return (
    <CustomCarousel>
      <ImageBox>
      <img src={process.env.PUBLIC_URL + "/portfolio1.jpg"} />
      </ImageBox>
      <ImageBox>
      <img src={process.env.PUBLIC_URL + "/portfolio2.jpg"} />
      </ImageBox>
      <ImageBox>
      <img src={process.env.PUBLIC_URL + "/portfolio3.jpg"} /> 
      </ImageBox>
    </CustomCarousel>
  );
}

export default Carousel3;
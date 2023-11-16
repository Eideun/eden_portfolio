import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow0x: hidden;
  background-color: #1D809F;
  padding-bottom: 100px;
  overflow-x: hidden;

  @media(max-width: 767px) {
    width: 95vw;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto 0;
  height: 60px;
  align-items: center;
  width: 100%;
  min-width: 100%;
  z-index: 9998;
  -webkit-font-smoothing: antialiased;

  h2 {
    font-size: 2.7rem;
    font-weight: 900;
    color: whitesmoke;
    letter-spacing: 5px;
  }
`

const ContentsWrapper = styled.div`
    width: 1200px;
    height: 900px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,.25);
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px 0;

    @media(max-width: 767px) {
      height: 1400px;
      width: 80vw;
      margin-top: 80px;
      margin-right: 7vw;
    }
`

const ProjectTitle = styled.div`
  display: flex;
  margin: 30px auto;
  
  h3 {
    font-size: 40px;
    font-family: NotoM;
    letter-spacing: 0;
  }
`

const ProjectContainer = styled.div`
  display: flex;

  @media(max-width:767px) {
    flex-direction: column;
  }
`

const Section1 = styled.div`
  padding: 50px;
  width: 600px;
  margin-left: 50px;

  @media(max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`

const Section2 = styled.div`
  padding: 50px 0 0 20px;
  width: 500px;

  @media(max-width: 767px) {
    width: 100%;
    margin-top: 150px;
  }
`

const Introduce = styled.div`
  p {
    font-size: 16px;
  }

  @media(max-width:767px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    
    p {
      font-size: 14px;
    }
  }
`

const UnderLine = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgb(204, 204, 204);
`

const Description = styled.div`
  display: flex;

`

const CheckBoxes = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;

  img {
    width: 20px;
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Processer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 20px;
    margin-top: 31px;
  }

  @media(max-width: 767px) {
    width: 100px;

    span {
      font-size: 18px;
      margin-top: 34px;
    }
  }
`

const Detail = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  a {
    margin-top: 34px;
    color: blue;
    opacity: 0.8;
  }

  span {
    margin-top: 17px;
    font-size: 16px;
  }

  ul {
    margin-top: 30px;
    margin-left: 0;
    padding-left: 14px;
  }

  .stacks {
    margin-top: 38px;
  }

  .space {
    margin-top: 34px;
  }

  .stacks2 {
    margin-top: 15px;
  }

  .works {
    margin-top: 16px;
    font-size: 16px;
  }
`

export const ProjectStyles = {
    Container,
    Title,
    ContentsWrapper,
    ProjectTitle,
    ProjectContainer,
    Section1,
    Section2,
    Introduce,
    UnderLine,
    Description,
    CheckBoxes,
    Processer,
    Detail
}
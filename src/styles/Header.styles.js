import styled from "styled-components"

const Container = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    background: white;
    z-index: 9999;
    cursor: pointer;

    @media(min-width: 762px) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    color: white;
    width: 20%;
    margin-left: 40px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    white-space: nowrap;

    h2 {
        color: #969A9B;
        font-size: 24px;
        margin-left: 10px;
        margin-bottom: 20px;
        font-family: fontBold;
        font-weight: 600;

        @media (max-width: 762px) {
            margin-left: 10px;
            font-size: 20px;
        }
    }

    @media (max-width: 762px) {
        margin-left: 10px;
    }
`;


const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;

  span {
    font-size: 22px;
    margin-right: 12px;
    position: relative;
    padding: 5px;


    &.selected {
      background-color: #fff;
      opacity: 0.8;
      border-radius: 8px;
      color: green;
    }

    @media (max-width: 762px) {
      margin-right: 3px;
      font-size: 16px;
    }
  }
`;

export const HeaderStyles = {
    Container,
    LogoWrapper,
    MenuWrapper
}
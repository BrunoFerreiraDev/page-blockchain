import styled from "styled-components";
import canvasBackground from "../assets/images/canvasBackground.svg";
export const Main = styled.main`
  display: grid;
  justify-content: center;
  background: linear-gradient(
    90deg,
    #0b0b0e 0%,
    #0c0d0f 28.98%,
    #0c0e0f 46.81%,
    #0e1113 66.78%,
    #131c1f 99.77%
  );
`;

export const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100%;

  padding: 0 32px;

  align-items: center;

  .divBackground {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
  #canvasFirstSection {
    grid-row: 1/1;
    grid-column: 1/1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100%;
  background: #000101;

  grid-row: 1/1;
  grid-column: 1/1;
`;
export const ContentImage = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  img {
    width: 50vw;
    height: 80vh;
  }
`;
export const ContentItems = styled.div`
  display: grid;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 40vw;
  padding: 40px 40px 40px 80px;
  position: relative;
  height: 100%;
  margin-right: 20px;
  position: relative;
  z-index: 1;
  .firstSection {
    background: #000101;
  }
  h1 {
    margin-top: 32px;
  }
  .blackTitle {
    color: #000101;
  }
  p {
    margin-top: 32px;

    color: #838383;
    max-width: 22.75rem;
  }
  button {
    margin: 16px 0;
  }
  h5 {
    color: #eba417;
  }
  .contentButtons {
    display: flex;
    align-items: center;
  }
  .signin {
    width: 12.25rem;
    height: 3.8rem;
    margin-right: 16px;
  }
  .showMore {
    height: 3.8rem;
    background: #121214;
  }
`;
export const CanvasBox = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
  width: 100vw;
  height: 480px;

  background: #fff;
`;

export const ShowMoreButtom = styled.button`
  width: 16.25rem;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: #283036;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CertificationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.25rem;
  height: 6rem;
  margin: 16px 0;
  background: #111517;
  border: 4px solid #eba417;
  border-radius: 24px;
`;

export const SigninButtom = styled.button`
  width: 16.25rem;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: #eba417;
  color: #121214;
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
export const ContentSecction = styled.div`
  display: flex;
  justify-self: center;
  width: 100vw;
  padding: 0 32px;

  position: relative;
  z-index: 1;

  .divBackground {
    width: 100%;
    background: linear-gradient(
      90deg,
      #11171a 0%,
      #11171a 42.33%,
      #11171a 100%
    );
  }
`;
export const SectionMain = styled.section`
  display: flex;
  width: 100%;
  /* height: calc(84vh - 14px); */
  height: 100%;
  background-image: url(${canvasBackground?.src});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  .contentImage {
    display: flex;
    align: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-self: center;
  width: 100vw;
  height: 100vh;

  padding: 0 32px;
  .divBackground {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      90deg,
      #11171a 0%,
      #11171a 42.33%,
      #11171a 100%
    );
    .content,
    #canvasFooter {
      grid-row: 1/1;
      grid-column: 1/1;
    }
    .contentItem {
      display: flex;
      justify-self: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;
      span {
        margin: 16px 32px;
      }
    }
    .content {
      display: grid;
      justify-self: center;
      position: relative;
      bottom: 200px;
      z-index: 1;
      h1 {
        margin: 16px 0;
        text-align: center;
      }
    }
    .item {
      display: grid;
      span:first-child {
        color: #eba417;
      }
    }
  }
`;

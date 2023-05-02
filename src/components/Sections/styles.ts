import styled from "styled-components";

export const BoxMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .content {
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
  width: 100%;
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
    display: none;
    width: 100%;
    height: 80vh;
  }
`;
export const ContentItems = styled.div`
  display: grid;
  justify-content: center;
  max-width: 50vw;
  width: 100%;
  height: 100%;
  padding: 2.5rem 0.5rem;
  position: relative;
  z-index: 1;

  h1,
  .blackTitle,
  p,
  button,
  h5,
  h3,
  div {
    width: 80%;
    display: flex;
    text-align: center;
    justify-self: center;
  }

  .firstSection {
    background: #000101;
  }
  h1 {
    margin-top: 2rem;
  }
  .blackTitle {
    color: #000101;
  }
  p {
    margin-top: 2rem;

    color: #838383;
    max-width: 22.75rem;
  }
  button {
    margin: 1rem 0;
  }
  h5 {
    color: #eba417;
  }
  .contentButtons {
    display: flex;
    align-items: center;
  }

  .showMore {
    background: #121214;
    margin-left: 1rem;
  }
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
  margin: 1rem 0;
  background: #111517;
  border: 0.25rem solid #eba417;
  border-radius: 1.5rem;
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
  width: 100%;
  height: 100%;

  .divBackground {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: flex-start;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      #11171a 0%,
      #11171a 42.33%,
      #11171a 100%
    );
  }
  .contentBackgroundImage {
    position: relative;
    bottom: 2px;

    img {
      display: none;
      width: 100%;
      height: 150%;
    }
  }
`;
export const SectionMain = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background: #afbbc1;
  position: relative;
  z-index: 1;
  .ContentItems {
    max-width: 50vw;
    height: 90%;
    padding: 2.5rem 0.5rem;
  }
  .contentImage {
    display: flex;
    align: center;
    justify-content: center;

    width: 100%;
    height: 90%;
    img {
      display: none;

      width: 80%;
      height: 80%;
    }
    @media (max-width: 400px) {
      width: 50% !important;
    }
  }
  .contentButtons {
    button {
      &:first-child {
        width: 60%;
      }
    }
    @media (max-width: 720px) {
      & {
        display: grid;
        button {
          width: 100% !important;
        }
        .showMore {
          margin-left: 0;
        }
      }
    }
  }
`;

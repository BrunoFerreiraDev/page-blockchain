import styled from "styled-components";

export const FooterContent = styled.footer`
  display: flex;
  justify-self: center;
  width: 100%;
  height: 100%;

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

    h1,
    .contentItem {
      width: 80%;
      display: flex;
      text-align: center;
      justify-self: center;
    }

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
        margin: 1rem 2rem;
      }
    }
    .content {
      display: grid;
      justify-self: center;
      position: relative;
      z-index: 1;
      h1 {
        margin: 1rem 0;
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

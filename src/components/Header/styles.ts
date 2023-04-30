import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px;
  font-size: 1.5rem;
  background: linear-gradient(
    90deg,
    #000000 0%,
    #000000 26.83%,
    #000000 41.65%,
    #000000 50.86%,
    #000409 63.16%,
    #000c0c 77.48%,
    #001113 87.55%,
    #001314 93.81%,
    #001517 97.24%
  );
`;

export const BoxHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .logo {
    height: 6.625rem;
    width: 7.875rem;
    margin-left: 4rem;
  }
`;
export const NavHeader = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  a {
    &:hover {
      color: var(--white);
      font-weight: bold;
    }
    &.active {
      font-weight: bold;
      color: #eba417;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
  width: 100vw;
  height: 480px;

  background: #fff;
`;

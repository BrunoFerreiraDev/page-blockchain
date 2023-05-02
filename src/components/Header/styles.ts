import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: space-between;
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
  height: 90%;

  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  .logo {
    height: 100%;
    width: 7.875rem;
  }
`;
export const NavHeader = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  a {
    padding: 0 0.5rem;
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

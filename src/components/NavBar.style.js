import styled from 'styled-components';
import NavBarContent from './NavBarContent';

export const NavBar = styled(NavBarContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 3rem 8.2rem 3.2rem;
  color: hsl(0, 0%, 100%);
  background-color: hsl(209, 23%, 22%);

  & h1 {
    margin: 0;
    line-height: 1;
  }

  & button {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 100%);
    font-weight: 600;
    gap: 1rem;
    border: 0;
    font-family: 'Nunito Sans';
    font-size: 1.6rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    height: 0;

    & svg {
      width: 1.4rem;
    }
  }
`;

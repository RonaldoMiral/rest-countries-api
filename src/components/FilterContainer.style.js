import styled from 'styled-components';
import Filters from './Filters';

export const FilterContainer = styled(Filters)`
  display: flex;
  justify-content: space-between;
  position: relative;

  & div {
    & input[type='text'] {
      height: 5.6rem;
      width: 48rem;
      border: 0;
      outline: 0;
      border-radius: 0.5rem;
      background-color: hsl(209, 23%, 22%);
      padding: 0 1.6rem 0 6.4rem;
      font-size: 1.6rem;
      color: hsl(0, 0%, 100%);

      &::placeholder {
        color: hsl(0, 0%, 100%);
        font-family: Nunito Sans;
      }
    }

    & svg {
      width: 1.9rem;
      position: absolute;
      left: 3.2rem;
      top: 50%;
      translate: 0 -50%;
    }
  }

  & .custom-select {
    width: 20rem;
    border-radius: 0.5rem;
    background-color: hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%);
    padding: 0 1.9rem 0 2.5rem;
    position: relative;

    & .label-container {
      position: relative;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    & .label-container,
    & label,
    & svg,
    & .options li {
      cursor: pointer;
    }

    & label {
      user-select: none;
    }

    & svg {
      width: 1rem;
      position: absolute;
      left: 14.6rem;
    }

    & .options {
      position: absolute;
      background-color: hsl(209, 23%, 22%);
      top: 6.5rem;
      left: 0;
      width: 100%;
      list-style: none;
      border-radius: 0.5rem;
      padding: 2rem 2.5rem;
      display: grid;
      gap: 1.6rem;
    }

    & li:hover {
      background-color: hsla(207, 26%, 17%, 0.3);
      border-radius: 0.5rem;
    }
  }
`;

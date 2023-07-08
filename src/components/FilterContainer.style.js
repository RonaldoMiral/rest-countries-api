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
`;

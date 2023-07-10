import styled from 'styled-components';

export const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 7.2rem;
  justify-content: space-between;
`;

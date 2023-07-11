import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Input = styled.input`
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
`;

export const SearchIcon = styled.img`
  width: 1.9rem;
  position: absolute;
  left: 3.2rem;
  top: 50%;
  translate: 0 -50%;
`;

export const CustomSelect = styled.div`
  width: 20rem;
  border-radius: 0.5rem;
  background-color: hsl(209, 23%, 22%);
  color: hsl(0, 0%, 100%);
  padding: 0 1.9rem 0 2.5rem;
  position: relative;
  cursor: pointer;
`;

export const LabelContainer = styled.div`
  position: relative;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Label = styled.label`
  user-select: none;
  cursor: pointer;
`;

export const DropMenuIcon = styled.img`
  width: 1rem;
  position: absolute;
  left: 14.6rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Regions = styled.ul`
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
  cursor: default;
`;

export const Region = styled.li`
  line-height: 1;
  &:hover {
    background-color: hsla(207, 26%, 17%, 0.3);
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

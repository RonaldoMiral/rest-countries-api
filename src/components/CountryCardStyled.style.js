import styled from 'styled-components';

export const CountryStyled = styled.div`
  height: 33.6rem;
  width: 26.3rem;
  background-color: hsl(209, 23%, 22%);
  display: grid;
  font-size: 1.4rem;
  line-height: 1;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.8rem hsla(200, 15%, 8%, 0.5);
`;

export const FlagImage = styled.img`
  height: 16rem;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Details = styled.div`
  color: hsl(0, 0%, 100%);
  padding: 3rem 2.4rem;
  margin-top: -1.5rem;
`;

export const CountryName = styled.h3`
  margin-bottom: 2.5rem;
`;

export const InfoContainer = styled.div`
  display: grid;
  gap: 1.4rem;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Info = styled.p``;

export const Strong = styled.strong``;

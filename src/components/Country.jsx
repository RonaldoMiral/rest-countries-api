import React from 'react';
import {
  CountryName,
  CountryStyled,
  Details,
  FlagImage,
  Info,
  InfoContainer,
  Legend,
  Strong,
} from './CountryStyled.style';

const Country = ({ country }) => {
  return (
    <CountryStyled>
      <FlagImage src={country.flag} />
      <Details>
        <CountryName>{country.name}</CountryName>

        <InfoContainer>
          <Legend>
            <Strong>Population:</Strong>
            <Info>{country.population}</Info>
          </Legend>
          <Legend>
            <Strong>Region:</Strong>
            <Info>{country.region}</Info>
          </Legend>
          <Legend>
            <Strong>Capital:</Strong>
            <Info>{country.capital}</Info>
          </Legend>
        </InfoContainer>
      </Details>
    </CountryStyled>
  );
};

export default Country;

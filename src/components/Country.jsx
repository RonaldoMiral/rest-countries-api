import React from 'react';
import { CountryStyled, FlagImage } from './CountryStyled.style';

const Country = ({ country }) => {
  return (
    <CountryStyled>
      <FlagImage src={country.flag} />
    </CountryStyled>
  );
};

export default Country;

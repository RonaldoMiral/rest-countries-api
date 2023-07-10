import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { GlobalStyles } from './components/GlobalStyles.style';
import { AppContainer } from './components/AppContainer.style';
import { NavBar } from './components/NavBar.style';
import { HomeContainer } from './components/HomeContainer.style';
import { FilterContainer } from './components/FilterContainer.style';
import { CountriesContainer } from './components/CountriesContainer.style';
import Country from './components/Country';
import { CountryStyled } from './components/CountryStyled.style';
import Filters from './components/Filters';

function App() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:5173/data.json');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!Array.isArray(data)) {
    return <div>Loading</div>;
  }

  console.log(data[3]);

  const countries = data.map((item) => (
    <Country key={item.numericCode} country={item} />
  ));

  return (
    <AppContainer>
      <GlobalStyles />
      <NavBar />
      <HomeContainer>
        <Filters />
        <CountriesContainer>{countries}</CountriesContainer>
      </HomeContainer>
    </AppContainer>
  );
}

export default App;

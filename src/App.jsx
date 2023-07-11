import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AppContainer } from './components/AppContainer.style';
import { NavBar } from './components/NavBar.style';
import { HomeContainer } from './components/HomeContainer.style';
import { CountriesContainer } from './components/CountriesContainer.style';
import Country from './components/Country';
import Filters from './components/Filters';

function App() {
  const [data, setData] = useState('Loading...');
  const [filteredData, setFilteredData] = useState([]);
  const [searchedByRegion, setSearchedByRegion] = useState([]);

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

  // Make sure to not send a empty array/state
  if (!Array.isArray(data)) return <div>Loading</div>;

  // Will this state to render all data, this will help with the filter mechanism
  if (filteredData.length === 0) setFilteredData(data);

  // Filters the countries by the regions they are in.
  const filterByRegion = (region) => {
    const filteredCountries = data.filter(
      (country) => country.region === region
    );

    setFilteredData(filteredCountries);
    setSearchedByRegion(filteredCountries);
  };

  // FILTER BY COUNTRY NAME
  const filterByCountryName = (filtered) => {
    setFilteredData(filtered);
  };

  // Renders All the the countries
  const countries = filteredData.map((item) => (
    <Country key={item.numericCode} country={item} />
  ));

  return (
    <AppContainer>
      <NavBar />
      <HomeContainer>
        <Filters
          data={data}
          filterByRegion={filterByRegion}
          filterByCountryName={filterByCountryName}
          filteredData={filteredData}
          searchedByRegion={searchedByRegion}
        />
        <CountriesContainer>{countries}</CountriesContainer>
      </HomeContainer>
    </AppContainer>
  );
}

export default App;

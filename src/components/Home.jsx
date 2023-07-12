import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CountriesContainer } from '../components/CountriesContainer.style';
import CountryCard from '../components/CountryCard';
import Filters from '../components/Filters';
import Country from '../components/Country';

function Home() {
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
    <Link
      style={{ textDecoration: 'none' }}
      key={item.numericCode}
      to={`country/${item.name.toLowerCase()}`}
    >
      <CountryCard country={item} />
    </Link>
  ));

  return (
    <>
      <Filters
        data={data}
        filterByRegion={filterByRegion}
        filterByCountryName={filterByCountryName}
        filteredData={filteredData}
        searchedByRegion={searchedByRegion}
      />
      <CountriesContainer>{countries}</CountriesContainer>
    </>
  );
}

export default Home;

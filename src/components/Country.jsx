import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const { countryName } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:5173/data.json');
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const country = countries.filter(
    (country) => country.name.toLowerCase() === countryName
  );
  console.log(country);

  return <div>Country: {countryName}</div>;
};

export default Country;

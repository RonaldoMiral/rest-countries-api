import React, { useEffect, useState } from 'react';
import search from '../assets/search.svg';
import dropIcon from '../assets/chevron-down-solid.svg';
import {
  CustomSelect,
  FilterContainer,
  Input,
  LabelContainer,
  SearchIcon,
  Regions,
  Region,
  DropMenuIcon,
  Label,
} from './FilterContainer.style';

const Filters = ({
  data,
  filterByRegion,
  filterByCountryName,
  filteredData,
  searchedByRegion,
}) => {
  // const [countries, setCountries] = useState(Array.from(data));
  const [visible, setVisible] = useState(false);
  const [targetCountry, setTargetCountry] = useState('');

  // Used to hide or show the custom select
  const dropRegions = (e) => setVisible((prevState) => !prevState);

  // There are more than needed region so that it is necessary to filter them
  // And then turn it into a set to avoid duplicated numbers.
  const NeededRegions = new Set(
    data
      .map((country) => {
        if (
          country.region !== 'Antarctic' &&
          country.region !== 'Antarctic Ocean' &&
          country.region !== 'Polar'
        )
          return country.region;
      })
      .filter(Boolean)
  );

  // Converting back to an array
  const regions = Array.from(NeededRegions)
    .sort()
    .map((region) => (
      <Region
        key={region.substring(0, 3)}
        onClick={() => filterByRegion(region)}
      >
        {region}
      </Region>
    ));

  // Responsible to search a country by its name
  const handleSearchCountry = (event) => {
    setTargetCountry(event.target.value);
  };

  // Makes sure that the typed text is immediately includes in the search
  // What enables it is the useEffect hook, as it is tracking
  // the targetCountry state
  useEffect(() => {
    if (targetCountry === '') {
      filterByCountryName(searchedByRegion);
    } else {
      const regex = new RegExp(`^${targetCountry}`, 'i');
      const targets = Array.from(filteredData).filter((country) =>
        regex.test(country.name)
      );

      filterByCountryName(targets);
    }
  }, [targetCountry]);

  return (
    <FilterContainer>
      <Input
        value={targetCountry}
        onChange={handleSearchCountry}
        placeholder="Search for a country..."
      />
      <SearchIcon src={search} />

      <CustomSelect onClick={dropRegions}>
        <LabelContainer>
          <Label>Filter by Region</Label>
          <DropMenuIcon src={dropIcon} />
        </LabelContainer>

        {visible && <Regions>{regions}</Regions>}
      </CustomSelect>
    </FilterContainer>
  );
};

export default Filters;

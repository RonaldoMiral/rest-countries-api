import React, { useState } from 'react';
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

const Filters = () => {
  const [visible, setVisible] = useState(false);
  const dropRegions = (e) => setVisible((prevState) => !prevState);

  return (
    <FilterContainer>
      <Input placeholder="Search for a country..." />
      <SearchIcon src={search} />

      <CustomSelect onClick={dropRegions}>
        <LabelContainer>
          <Label>Filter by Region</Label>
          <DropMenuIcon src={dropIcon} />
        </LabelContainer>

        {visible && (
          <Regions>
            <Region>Africa</Region>
            <Region>America</Region>
            <Region>Asia</Region>
            <Region>Europa</Region>
            <Region>Oceania</Region>
          </Regions>
        )}
      </CustomSelect>
    </FilterContainer>
  );

  {
    /* // return (
  //   <FilterContainer>
  //     <div className="search-field">
  //       <input type="text" id="" placeholder="Search for a country..." />
  //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //         <path */
  }
  //           d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
  //           fill="hsl(0, 0%, 100%)"
  //         />
  //       </svg>
  //     </div>

  //     <CustomSelect onClick={() => dropMenu()}>
  //       <LabelContainer onClick={() => dropMenu()}>
  //         <label onClick={() => dropMenu()}>Filter by Region</label>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 512 512"
  //           onClick={() => dropMenu()}
  //         >
  //           <path
  //             d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
  //             fill="hsl(0, 0%, 100%)"
  //           />
  //         </svg>
  //       </LabelContainer>

  //       {visible && (
  //         <UnOrderedList>
  //           <li>Africa</li>
  //           <li>America</li>
  //           <li>Asia</li>
  //           <li>Europa</li>
  //           <li>Oceania</li>
  //         </UnOrderedList>
  //       )}
  //     </CustomSelect>
  //   </FilterContainer>
  // );
};

export default Filters;

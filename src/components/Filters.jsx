import React, { useState } from 'react';

const Filters = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const dropMenu = (e) => setVisible((prevState) => !prevState);

  console.log(visible);

  return (
    <div className={className}>
      <div className="search-field">
        <input type="text" id="" placeholder="Search for a country..." />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            fill="hsl(0, 0%, 100%)"
          />
        </svg>
      </div>

      <div className="custom-select" onClick={() => dropMenu()}>
        <div className="label-container" onClick={() => dropMenu()}>
          <label onClick={() => dropMenu()}>Filter by Region</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => dropMenu()}
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              fill="hsl(0, 0%, 100%)"
            />
          </svg>
        </div>

        {visible && (
          <ul className="options">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europa</li>
            <li>Oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;

// src/components/DataDisplay.js
import React from 'react';
import ReusableComponent from './ReusableComponent';

const DataDisplay = ({ characters, onFilterChange, onSortChange }) => {
  const handleFilter = (event) => {
    onFilterChange(event.target.value);
  };

  const handleSort = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Filter characters..." onChange={handleFilter} />
      <select onChange={handleSort}>
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>
      <div>
        {characters.map(character => (
          <ReusableComponent key={character.name} character={character} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
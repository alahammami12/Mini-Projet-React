// src/components/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import DataDisplay from './DataDisplay';
import { fetchHarryPotterCharacters } from '../services/apiService';
import '../styles/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHarryPotterCharacters()
      .then(data => {
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (searchTerm) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const handleSortChange = (sortOrder) => {
    const sorted = [...filteredCharacters].sort((a, b) =>
      sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilteredCharacters(sorted);
  };

  return (
    <div className="App">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <DataDisplay
          characters={filteredCharacters}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      )}
    </div>
  );
};

export default App;
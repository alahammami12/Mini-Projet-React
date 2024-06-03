// src/services/apiService.js
export const fetchHarryPotterCharacters = async () => {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
// src/components/ReusableComponent.js
import React from 'react';

const ReusableComponent = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.house}</p>
    </div>
  );
};

export default ReusableComponent;
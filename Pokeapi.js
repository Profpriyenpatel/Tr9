import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
      setError('');
    } catch (error) {
      setError('Pokemon not found. Please enter a valid Pokemon name or ID.');
      setPokemonData(null);
    }
  };

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div>
      <h2>Search for a Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Pokémon name or ID"
          value={pokemonName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p><strong>Types:</strong> {pokemonData.types.map(type => type.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;

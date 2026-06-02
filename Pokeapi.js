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
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="card shadow-lg border-0 rounded-4">

          <div className="card-header text-center bg-danger text-white">
            <h2>🎮 Pokémon Search</h2>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pokémon Name or Number"
                  value={pokemonName}
                  onChange={handleChange}
                />
                <button className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {pokemonData && (
              <div className="text-center">

                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="img-fluid"
                  style={{ width: "180px" }}
                />

                <h2 className="text-capitalize mt-3">
                  {pokemonData.name}
                </h2>

                <hr />

                <div className="row">

                  <div className="col-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h6>Height</h6>
                        <h4>{pokemonData.height}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h6>Weight</h6>
                        <h4>{pokemonData.weight}</h4>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-4">

                  <h5>Types</h5>

                  {pokemonData.types.map((type) => (
                    <span
                      key={type.type.name}
                      className="badge bg-success me-2"
                    >
                      {type.type.name}
                    </span>
                  ))}

                </div>

                <div className="mt-4">

                  <h5>Abilities</h5>

                  {pokemonData.abilities.map((ability) => (
                    <span
                      key={ability.ability.name}
                      className="badge bg-info text-dark me-2"
                    >
                      {ability.ability.name}
                    </span>
                  ))}

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  </div>
);
};

export default PokemonInfo;

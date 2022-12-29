import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const result = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(result.data.results);
    }
    fetchTypes();
  }, []);

  return (
    <ul>
      {types.map(t => (
        <li key={t.name}>{t.name}</li>
      ))}
    </ul>
  );
}
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';


function App() {
  const [team, setTeam] = useState([]);
  const [show, setShow] = useState(false);
  const [teamText, setTeamText] = useState(null);

  useEffect(() => {
    console.log(team);
  },[team]);

  const guardarPokemon = (pokemon_json) => {
    if (team.length < 6) {
      setTeam([...team, pokemon_json]);
      setTeamText("Pokemon agregado al equipo");
      setShow(true);
    }
    else {
      setTeamText("El equipo está lleno");
      setShow(true);
    }
  }

  const eliminarPokemon = (id_pokemon) => {
    console.log(id_pokemon);
  }

  return (
    <div className="App">
      <Navbar 
          guardarPokemon={guardarPokemon} 
          eliminarPokemon={eliminarPokemon}
          showToast={show}
          teamText={teamText}
      />
    </div>
  );
}

export default App;
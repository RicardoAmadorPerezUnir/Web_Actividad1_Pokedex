import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';


function App() {
  const [team, setTeam] = useState([]);
  return (
    <div className="App">
      <Navbar team={team} setTeam={setTeam}/>
    </div>
  );
}

export default App;
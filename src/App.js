import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import "./styles/index.css"


function App() {
  const [team, setTeam] = useState([]);
  return (
    <div className="App">
      <Navbar team={team} setTeam={setTeam}/>
    </div>
  );
}

export default App;
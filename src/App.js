//Componente principal de la aplicación que engloba los componentes Card y Navbar
import { Navbar } from './components/Navbar';
import { Homepage } from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="homepage-container">
        {Homepage}
      </div>
    </div>
  );
}

export default App;

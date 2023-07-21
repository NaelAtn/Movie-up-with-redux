import { useState } from 'react';
import './App.css';
import ListMovies from './Components/ListMovies/ListMovies';
import NavBar from './Components/NavBar/NavBar';
import AddMovie from './Components/AddMovie/AddMovie';

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="App">
        <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <AddMovie/>
        <ListMovies inputSearch={inputSearch} />
    </div>
  );
}

export default App;
